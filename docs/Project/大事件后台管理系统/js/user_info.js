$(function () {
    var form = layui.form;
    var layer = layui.layer;
    form.verify({
        nickname: function (value) {
            if (value.length > 6) {
                return "昵称长度必须在 1 ~ 6 个字符之间！";
            }
        },
    });
    initUserInfo()
    function initUserInfo() {
        $.ajax({
            method: "GET",
            url: "/my/userinfo",
            success: function (response) {
                if (response.status !== 0) {
                    return layer.msg("获取用户信息失败！")
                }
                form.val("formUserInfo", response.data)
            }
        });
    }
    // 重置
    $("#btnReset").on("click", function (e) {
        e.preventDefault();
        initUserInfo()
    })
    // 提交
    $(".layui-form").on("submit", function (e) {
        e.preventDefault();
        $.ajax({
            method: "POST",
            url: "/my/userinfo",
            data: $(this).serialize(),
            success: function (response) {
                if (response.status !== 0) {
                    return layer.msg("更新用户信息失败！")
                }
                layer.msg("更新用户信息成功！")
                window.parent.getUserInfo();


            }
        });
    })
});
