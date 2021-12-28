$(function () {
    initArtCateList()
    // 初始化获取数据
    function initArtCateList() {
        $.ajax({
            method: "GET",
            url: "/my/article/cates",
            success: function (response) {
                var htmlStr = template("tpl-table", response)
                $(".layui-table tbody").html("")
                $(".layui-table tbody").html(htmlStr)
            }
        });
    }
    // 添加类别
    var indexAdd
    $("#btnAddCate").on("click", function () {
        indexAdd = layui.layer.open({
            type: 1,
            area: ["500px", "250px"],
            title: '添加文件分类'
            , content: $("#dialog-add").html()
        })
    })
    $("body").on("submit", ".form-add", function (e) {
        e.preventDefault();
        $.ajax({
            method: "POST",
            url: "/my/article/addcates",
            data: $(this).serialize(),
            success: function (response) {
                if (response.status !== 0) {
                    return layui.layer.msg("新增分类失败！")
                }
                initArtCateList()
                layui.layer.msg("新增分类成功！")
                layui.layer.close(indexAdd)
            }
        });
    })
    var indexEdit
    // 修改
    $("body").on("click", ".btn-edit", function () {
        indexEdit = layui.layer.open({
            type: 1,
            area: ["500px", "250px"],
            title: '修改文件分类'
            , content: $("#dialog-edit").html()
        })
        var id = $(this).attr("data-id")
        $.ajax({
            type: "GET",
            url: "/my/article/cates/" + id,
            success: function (response) {
                layui.form.val("form-edit", response.data)
            }
        });
    })
    $("body").on("submit", "#form-edit", function (e) {
        e.preventDefault();
        console.log($(this).serialize());
        $.ajax({
            type: "POST",
            url: "/my/article/updatecate",
            data: $(this).serialize(),
            success: function (response) {
                if (response.status !== 0) {
                    return layui.layer.msg("新增分类数据失败！")
                }
                layui.layer.msg("新增分类数据成功！")
                layui.layer.close(indexEdit)
                initArtCateList()
            }
        });
    })
    // 删除
    $("body").on("click", ".btn-delete", function () {
        var id = $(this).attr("data-id")
        console.log(id);
        layer.confirm('确认删除？', { icon: 3, title: '提示' }, function (index) {
            $.ajax({
                type: "GET",
                url: "/my/article/deletecate/" + id,
                success: function (response) {
                    if (response.status !== 0) {
                        return layui.layer.msg("删除分类失败！")
                    }
                    layui.layer.msg("删除分类成功！")
                    layui.layer.close(index)
                    initArtCateList()
                }
            });
        });
    })
})
