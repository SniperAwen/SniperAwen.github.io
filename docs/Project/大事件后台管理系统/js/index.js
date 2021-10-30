$(function () {
  getUserInfo();
  var layer = layui.layer;
  // 退出提示
  $("#btnLogout").on("click", function () {
    layer.confirm(
      "确定退出登录？",
      { icon: 3, title: "提示" },
      function (index) {
        //do something
        localStorage.removeItem("token");
        location.href = "./login.html";
        layer.close(index);
      }
    );
  });
});
function getUserInfo() {
  $.ajax({
    method: "GET",
    url: "/my/userinfo",
    success: function (response) {
      if (response.status !== 0) {
        return layui.layer.msg("获取用户信息失败！");
      }
      // console.log(response.data);
      renderAvater(response.data);
    },
  });
}
// 渲染用户头像
function renderAvater(data) {
  var name = data.nickname || data.username;
  $("#welcome").html("欢迎&nbsp;" + name);
  if (data.user_pic !== null) {
    $(".text-avatar").hide();
    $(".layui-nav-img").attr("src", data.user_pic).show();
  } else {
    $(".layui-nav-img").hide();
    $(".text-avatar").html(name[0].toUpperCase()).show();
  }
}