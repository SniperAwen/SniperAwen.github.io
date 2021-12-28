$(function () {
    var data = {
        pagenum: 1,
        pagesize: 2,
        cate_id: "",
        state: ""
    }
    // template过滤器
    template.defaults.imports.dataFormat = function (data) {
        const dt = new Data(data)
        var y = dt.getFullYear()
        var m = dt.getMonth() + 1
        var d = dt.getDate()
        var hh = dt.getHours()
        var mm = dt.getMinutes()
        var ss = dt.getSeconds()
        m = padZero(m)
        d = padZero(d)
        hh = padZero(hh)
        mm = padZero(mm)
        ss = padZero(ss)
        return y + "-" + m + "-" + d + " " + hh + ":" + mm + ":" + ss
    }
    // 补零
    function padZero(n) {
        if (n >= 10) {
            return n
        }
        return "0" + n
    }
    // 获取文章列表数据
    initTable()
    function initTable() {
        $.ajax({
            type: "GET",
            url: "/my/article/list",
            data: data,
            success: function (response) {
                // console.log(response.data);
                if (response.status !== 0) {
                    return layui.layer.msg("获取文章列表失败！")
                }
                var htmlStr = template("tpl-table", response)
                $("tbody").html(htmlStr)
                renderPage(response.total)
            }
        });
    }

    // 获取文章分类
    initCate()
    function initCate() {
        $.ajax({
            type: "GET",
            url: "/my/article/cates",
            success: function (response) {
                if (response.status !== 0) {
                    return layui.layer.msg("获取分类数据失败！")
                }
                var htmlStr = template("tpl-cate", response)
                $("[name=cate_id]").html(htmlStr)
                layui.form.render()
            }
        });
    }
    // 筛选
    $("#form-search").on("submit", function (e) {
        e.preventDefault();
        var cate_id = $("[name=cate_id]").val()
        var state = $("[name=state]").val()
        data.cate_id = cate_id
        data.state = state
        initTable()
    })
    // 分页
    function renderPage(total) {
        layui.laypage.render({
            elem: 'pageBox',  //注意，这里的 test1 是 ID，不用加 # 号
            count: total,
            limit: data.pagesize,//数据总数，从服务端得到
            curr: data.pagenum,
            layout: ["count", "limit", "prev", "page", "next", "skip"],
            limits: [2, 3, 5, 10],
            jump: function (obj, first) {
                //obj包含了当前分页的所有参数，比如：
                data.pagenum = obj.curr
                data.pagesize = obj.limit
                //首次不执行
                if (!first) {
                    //do something
                    initTable()

                }
            }
        });
    }
    // 删除
    $("body").on("click", ".btn-delete", function () {
        // 删除按钮的个数
        var len = $(".btn-delete").length
        var id = $(this).attr("data-id")
        layui.layer.confirm('确认删除？', { icon: 3, title: '提示' }, function (index) {
            $.ajax({
                type: "GET",
                url: "/my/article/delete/" + id,
                success: function (response) {
                    if (response.status !== 0) {
                        return layui.layer.msg("删除文章失败！")
                    }
                    layui.layer.msg("删除文章成功！")
                    // 判断删除后是否有数据
                    if (len === 1) {
                        if (data.pagenum !== 1) {
                            data.pagenum = data.pagenum - 1
                        } else {
                            data.pagenum = 1
                        }
                    }
                    initTable()
                }
            });

            layui.layer.close(index);
        });
    })
    // 查看
    $("body").on("click", ".btn-edit", function () {

        var id = $(".btn-delete").attr("data-id")
        console.log(id);
        $.ajax({
            type: "GET",
            url: "/my/article/" + id,
            success: function (response) {
                if (response.status !== 0) {
                    return layui.layer.msg("获取文章详情失败！")
                }

                var htmlStr = '<h2 style="text-align: center;">' + response.data.title + '</h2><span>&nbsp;&nbsp;&nbsp;文章ID：' + response.data.Id + '</span><span>&nbsp;&nbsp;&nbsp;发布时间：' + response.data.pub_date + '</span><span></span><span>&nbsp;&nbsp;&nbsp;状态：' + response.data.state + '</span><br><br> <img src="http://api-breakingnews-web.itheima.net' + response.data.cover_img + '" alt=""><br>' + response.data.content + ''
                indexEdit = layui.layer.open({
                    type: 1,
                    title: '预览文章',
                    area: ['1000px', '600px']
                    , content: htmlStr
                })
            }
        });

    })
})
