"use strict";

window.onload = function () {
  var KEYMAP = {
      Awen: 0,
      "Twilight Sparkle": 2,
      Applejack: 4,
      Fluttershy: 6,
      "Pinkie Pie": 8,
      "Rainbow Dash": 10,
      Rarity: 12,
      "Princess Luna": 14,
      "Princess Celestia": 16,
      "Princess Cadance": 18,
      "Shining Armor": 20,
      "Sweetie Belle": 22,
      "Apple Bloom": 24,
      "Babs Seed": 26,
      Scootaloo: 28,
      "Rick and Morty": 30,
      "Elden Ring": 32,
      "Dark Souls": 34,
      "Hollow Knight": 36,
      ICEY: 38,
      "Left 4 Dead": 40,
      "Little Nightmares": 42,
      "Sekiro™": 44,
      "Battlefield™": 46,
      Undertable: 48,
      Helltaker: 50,
      ネコぱら: 52,
      サノバウィッチ: 54,
      ドーナドーナ: 56,
      喫茶ステラと死神の蝶: 58,
      "せんれん*ばんか": 60,
      リドルジョーカー: 62,
      SnowBrandia: 64,
      DIY: 66,
      Singer: 68,
      Gamer: 70,
      Shadowverse: 72,
      Minecraft: 74,
      React: 76,
      Vue: 78,
      Uniapp: 80,
      Pokémon: 82,
      "The Legend of Zelda": 84,
      流丿心: 86,
      小狗妹妹: 88,
      白砂糖: 90,
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
