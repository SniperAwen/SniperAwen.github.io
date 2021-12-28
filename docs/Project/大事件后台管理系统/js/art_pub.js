$(function () {
    initCate()
    initEditor()
    // 获取文章分类
    function initCate() {
        $.ajax({
            type: "GET",
            url: "/my/article/cates",
            success: function (response) {
                if (response.status !== 0) {
                    return layui.layer.msg("初始化文章分类失败！")
                }
                var htmlStr = template("tpl-cate", response)
                $("[name=cate_id]").html(htmlStr)
                layui.form.render()
            }
        });
    }
    // 1. 初始化图片裁剪器
    var $image = $('#image')

    // 2. 裁剪选项
    var options = {
        aspectRatio: 400 / 280,
        preview: '.img-preview'
    }

    // 3. 初始化裁剪区域
    $image.cropper(options)

    $("#btnChooseImage").on("click", function () {
        $("#coverFile").click()
    })
    $("#coverFile").on("change", function (e) {
        var files = e.target.files
        if (files.length === 0) {
            return
        }
        var newImgURL = URL.createObjectURL(files[0])
        $image
            .cropper('destroy')      // 销毁旧的裁剪区域
            .attr('src', newImgURL)  // 重新设置图片路径
            .cropper(options)        // 重新初始化裁剪区域

    })
    // 发布文章状态
    var art_state = "已发布"
    $("#btnSave2").on("click", function () {
        art_state = "草稿"
    })
    $("#form-pub").on("submit", function (e) {
        e.preventDefault()
        var fd = new FormData($(this)[0])
        fd.append("state", art_state)
        $image
            .cropper('getCroppedCanvas', { // 创建一个 Canvas 画布
                width: 400,
                height: 280
            })
            .toBlob(function (blob) {       // 将 Canvas 画布上的内容，转化为文件对象
                // 得到文件对象后，进行后续的操作
                fd.append("cover_img", blob)
                publishArticle(fd)
            })
    })
    // 发布文章
    function publishArticle(fd) {
        $.ajax({
            type: "POST",
            url: "/my/article/add",
            data: fd,
            contentType: false,
            processData: false,
            success: function (response) {
                if (response.status !== 0) {
                    return layui.layer.msg("发布文章失败！")
                }
                layui.layer.msg("发布文章成功！")
                location.href = "../article/art_list.html"
            }
        });
    }
})