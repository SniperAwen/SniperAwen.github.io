"use strict";

window.onload = function () {
  var KEYMAP = {
      Awen: 8,
      "Twilight Sparkle": 9,
      Applejack: 13,
      Fluttershy: 16,
      "Pinkie Pie": 17,
      "Rainbow Dash": 18,
      Rarity: 20,
      "Princess Luna": 32,
      "Princess Celestia": 33,
      "Princess Cadance": 34,
      "Shining Armor": 35,
      "Sweetie Belle": 36,
      "Apple Bloom": 37,
      "Babs Seed": 38,
      Scootaloo: 39,
      "Rick and Morty": 40,
      "Elden Ring": 45,
      "Dark Souls": 46,
      "Hollow Knight": 48,
      ICEY: 49,
      "Left 4 Dead": 50,
      "Little Nightmares": 51,
      "Sekiro™": 52,
      "Battlefield™": 53,
      Undertable: 54,
      Helltaker: 55,
      ネコぱら: 56,
      サノバウィッチ: 57,
      "ドーナドーナ いっしょにわるいことをしよう": 65,
      喫茶ステラと死神の蝶: 66,
      "せんれん*ばんか": 67,
      リドルジョーカー: 68,
      SnowBrandia: 69,
      DIY: 70,
      Singer: 71,
      Gamer: 72,
      Shadowverse: 73,
      Minecraft: 74,
      React: 75,
      Vue: 76,
      Uniapp: 77,
      Pokémon: 78,
      "The Legend of Zelda": 79,
      // 逆流茶会: 80,
      // 萩: 81,
      // 玉砂糖: 82,
      // 色谷あすか: 83,
      // ChinTora0201: 84,
      // がおう: 85,
      // としぞう: 86,
      // mignon: 87,
      // ALLENES: 88,
      // イチリ: 89,
      // Loran: 90,
      // ひみつ: 112,
      // 鬼針草: 113,
      // 玉之けだま: 114,
      // Minecraft: 115,
      // 蹦极: 116,
      // 游乐场: 117,
      // 幽默: 118,
      // 摇滚: 119,
      // 喝酒: 120,
      // 慢走: 121,
      // 高尔夫球: 122,
      // 刷短视频: 123,
      // 微信聊天: 124,
      // 汽车: 125,
      // 探险: 126,
      // 潜水: 186,
      // 滑翔: 187,
      // 跳伞: 188,
      // 古玩: 189,
      // 玉器: 190,
      // 园艺: 191,
      // 烹饪美食: 219,
      // 暴发户: 220,
      // 富二代: 221,
      // 宅男: 222,
    },
    key_els = {};
  var rand = function rand() {
    var max =
      arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
    var min =
      arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

    var _int =
      arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

    var gen = min + (max - min) * Math.random();
    return _int ? Math.round(gen) : gen;
  };
  (function init() {
    var a3d = document.querySelector(".a3d"),
      f = document.createDocumentFragment(),
      lims = [33, 41, 47, 58, 91, 127, 146],
      len = lims.length,
      unit = 360 / (len + 1);
    for (var p in KEYMAP) {
      var rot = document.createElement("div"),
        key = document.createElement("div");
      key.dataset.name = p.replace("NUM_", "");
      key.dataset.code = KEYMAP[p];
      key.classList.add("key");
      for (var i = 0; i < len; i++) {
        if (KEYMAP[p] < lims[i]) {
          // var hue = rand((i + 0.8) * unit, (i + 0.2) * unit, 1);
          var hue = rand(
            Math.floor(Math.random() * 255),
            Math.floor(Math.random() * 255),
            1
          );
          // key.style.color = "hsl(" + hue + ",100%,65%)";
          key.style.color = `rgb(${Math.floor(
            Math.random() * 255
          )},${Math.floor(Math.random() * 255)},${Math.floor(
            Math.random() * 255
          )})`;
          break;
        }
      }
      rot.classList.add("rot");
      key_els[p] = key;
      rot.appendChild(key);
      f.appendChild(rot);
    }
    a3d.appendChild(f);
  })();
  addEventListener(
    "keydown",
    function (e) {
      e.preventDefault();
      for (var p in KEYMAP) {
        if (e.keyCode === KEYMAP[p]) {
          if (!key_els[p].classList.contains("vis"))
            key_els[p].classList.add("vis");
          return;
        }
      }
    },
    false
  );
  addEventListener(
    "keyup",
    function (e) {
      e.preventDefault();
    },
    false
  );
  addEventListener(
    "animationend",
    function (e) {
      var t = e.target;
      if (e.animationName === "hl") t.classList.remove("vis");
    },
    false
  );
};
