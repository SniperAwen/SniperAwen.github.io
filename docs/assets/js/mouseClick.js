/* !(function (e, t, a) {
  function r(e) {
    var a = t.createElement("div");
    (a.className = "heart"),
      n.push({
        el: a,
        x: e.clientX - 5,
        y: e.clientY - 5,
        scale: 1,
        alpha: 1,
        color:
          "rgb(" +
          ~~(255 * Math.random()) +
          "," +
          ~~(255 * Math.random()) +
          "," +
          ~~(255 * Math.random()) +
          ")",
      }),
      t.body.appendChild(a);
  }
  var n = [];
  (e.requestAnimationFrame =
    e.requestAnimationFrame ||
    e.webkitRequestAnimationFrame ||
    e.mozRequestAnimationFrame ||
    e.oRequestAnimationFrame ||
    e.msRequestAnimationFrame ||
    function (e) {
      setTimeout(e, 1e3 / 60);
    }),
    (function (e) {
      var a = t.createElement("style");
      a.type = "text/css";
      try {
        a.appendChild(t.createTextNode(e));
      } catch (t) {
        a.styleSheet.cssText = e;
      }
      t.getElementsByTagName("head")[0].appendChild(a);
    })(
      ".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"
    ),
    (function () {
      var t = "function" == typeof e.onclick && e.onclick;
      e.onclick = function (e) {
        t && t(), r(e);
      };
    })(),
    (function e() {
      for (var a = 0; a < n.length; a++)
        n[a].alpha <= 0
          ? (t.body.removeChild(n[a].el), n.splice(a, 1))
          : (n[a].y--,
            (n[a].scale += 0.004),
            (n[a].alpha -= 0.013),
            (n[a].el.style.cssText =
              "left:" +
              n[a].x +
              "px;top:" +
              n[a].y +
              "px;opacity:" +
              n[a].alpha +
              ";transform:scale(" +
              n[a].scale +
              "," +
              n[a].scale +
              ") rotate(45deg);background:" +
              n[a].color +
              ";z-index:99999"));
      requestAnimationFrame(e);
    })();
})(window, document);
 */
jQuery(function () {
  $("html").click(function (e) {
    var a_idx = Math.floor(Math.random() * 26);
    var a = new Array(
      "(❤ ω ❤)",
      "(●ˇ∀ˇ●)",
      "(￣_,￣ )",
      "(°ー°〃)",
      "≡(▔﹏▔)≡",
      "(●'◡'●)",
      "(*^▽^*)",
      "(°ー°〃)",
      "(✿◡‿◡)",
      "( •̀ ω •́ )y",
      "(★ ω ★)",
      "(＠＾０＾)",
      "U•ェ•*U",
      "(☆▽☆)",
      "<。)#)))≦",
      "（。＾▽＾）",
      "O(∩_∩)O",
      "(╯‵□′)╯︵┻━┻",
      "(´ｰ∀ｰ`)",
      "щ(ʘ╻ʘ)щ",
      "◑﹏◐",
      "( $ _ $ )",
      "┗|｀O′|┛",
      "╮(╯-╰)╭",
      "(✿◡‿◡)",
      "(ノへ￣、)",
      "╥﹏╥..."
    );
    var color1 = Math.floor(Math.random() * 255);
    var color2 = Math.floor(Math.random() * 255);
    var color3 = Math.floor(Math.random() * 255);

    var $i = $("<span />").text(a[a_idx]);
    a_idx = (a_idx + 1) % a.length;
    var x = e.pageX,
      y = e.pageY;
    $i.css({
      "z-index": 9999999999999,
      top: y - 20,
      left: x,
      position: "absolute",
      "font-family": "mmm",
      fontSize: Math.floor(Math.random() * 22 + 15),
      "font-weight": "bold",
      color: "rgb(" + color1 + "," + color2 + "," + color3 + ")",
      "-webkit-user-select": "none",
      "-moz-user-select": "none",
      "-ms-user-select": "none",
      "user-select": "none",
    });
    $("body").append($i);
    $i.animate(
      {
        top: y - 200,
        opacity: 0,
      },
      1000,
      function () {
        $i.remove();
      }
    );
  });
});
