$(function () {
  // 去注册/去登陆 点击事件
  $("#link_reg").on("click", function () {
    $(".login-box").hide();
    $(".reg-box").show();
  });
  $("#link_login").on("click", function () {
    $(".login-box").show();
    $(".reg-box").hide();
  });

  // 自定义校验规则
  layui.form.verify({
    pwd: [/^[\S]{6,12}$/, "密码必须6到12位，且不能出现空格"],
    repwd: function (value) {
      if (value !== $("#pwd").val()) {
        return "两次密码不一致";
      }
    },
  });

  // 注册表单提交事件
  $("#form_reg").on("submit", function (e) {
    e.preventDefault();
    $.post(
      "/api/reguser",
      {
        username: $("#username").val(),
        password: $("#pwd").val(),
      },
      function (res) {
        if (res.status !== 0) {
          return layui.layer.msg(res.message);
        }
        layui.layer.msg("注册成功，请登录！");
        $("#link_login").click();
      }
    );
  });

  // 登录表单提交事件
  $("#form_login").on("submit", function (e) {
    e.preventDefault();
    $.post(
      "/api/login",
      $(this).serialize(),
      function (res) {
        if (res.status !== 0) {
          return layui.layer.msg("登陆失败！");
        }
        layui.layer.msg("登陆成功！");
        localStorage.setItem("token", res.token);
        location.href = "./index.html";
      }
    );
  });
});
