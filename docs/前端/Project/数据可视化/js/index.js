$(function () {
  //-------------------- 左盒子-监控
  (function () {
    $(".monitor .tabs").on("click", "a", function () {
      $(this).addClass("active").siblings("a").removeClass("active");
      $(".monitor .content")
        .eq($(this).index())
        .show()
        .siblings(".content")
        .hide();
    });
    $(".marquee-view .marquee").each(function () {
      // 克隆追加
      var rows = $(this).children().clone();
      $(this).append(rows);
    });
  })();
  //-------------------- 左盒子-点位
  (function () {
    var myChart = echarts.init(document.querySelector(".pie"));
    var option = {
      color: [
        "#006cff",
        "#60cda0",
        "#ed8884",
        "#ff9f7f",
        "#0096ff",
        "#9fe6b8",
        "#32c5e9",
        "#1d9dff",
      ],
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      series: [
        {
          name: "点位统计",
          type: "pie",
          radius: ["10%", "70%"],
          center: ["50%", "50%"],
          roseType: "radius",
          label: {
            fontSize: 10,
            color: "rgba(255, 255, 255, 1)",
          },

          labelLine: {
            length: 4,
            length2: 6,
          },
          data: [
            { value: 20, name: "云南" },
            { value: 26, name: "北京" },
            { value: 24, name: "山东" },
            { value: 25, name: "河北" },
            { value: 20, name: "江苏" },
            { value: 25, name: "浙江" },
            { value: 30, name: "四川" },
            { value: 42, name: "湖北" },
          ],
        },
      ],
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  })();
  //-------------------- 中盒子-用户
  (function () {
    var item = {
      name: "",
      value: 1200,
      itemStyle: {
        color: "#254065",
      },
      emphasis: {
        itemStyle: {
          color: "#254065",
        },
      },
      tooltip: {
        extraCssText: "opacity:0",
      },
    };
    var myChart = echarts.init(document.querySelector(".bar"));
    var option = {
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: "#00fffb" },
        { offset: 1, color: "#0061ce" },
      ]),
      tooltip: {
        trigger: "item",
      },
      grid: {
        left: "0%",
        top: "3%",
        right: "3%",
        bottom: "3%",
        containLabel: true,
        show: true,
        borderColor: "rgba(0,240,255,0.3)",
      },
      xAxis: [
        {
          type: "category",
          data: [
            "上海",
            "广州",
            "北京",
            "深圳",
            "合肥",
            "",
            "......",
            "",
            "杭州",
            "厦门",
            "济南",
            "成都",
            "重庆",
          ],
          axisTick: {
            alignWithLabel: false,
            show: false,
          },
          axisLabel: {
            color: "#4c9bfd",
          },
          axisLine: {
            lineStyle: {
              color: "rgba(0,240,255,0.3)",
            },
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          axisTick: {
            alignWithLabel: false,
            show: false,
          },
          axisLabel: {
            color: "#4c9bfd",
          },
          axisLine: {
            lineStyle: {
              color: "rgba(0,240,255,0.3)",
            },
          },
          splitLine: {
            lineStyle: {
              color: "rgba(0,240,255,0.3)",
            },
          },
        },
      ],
      series: [
        {
          name: "直接访问",
          type: "bar",
          barWidth: "60%",
          data: [
            2100,
            1900,
            1700,
            1560,
            1400,
            item,
            item,
            item,
            900,
            750,
            600,
            480,
            240,
          ],
        },
      ],
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  })();
  //-------------------- 右盒子-订单
  (function () {
    $(".order .filter").on("click", "a", function () {
      $(this).addClass("active").siblings("a").removeClass("active");
      $(".order .databox")
        .eq($(this).index())
        .show()
        .siblings(".databox")
        .hide();
      index = $(this).index();
    });
    // tab栏自动切换
    var as = $(".order .filter a");
    var index = 0;
    var timer = setInterval(function () {
      as.eq(index).click();
      index++;
      if (index >= 4) {
        index = 0;
      }
    }, 1000);
  })();
  //-------------------- 右盒子-销售
  (function () {
    var data = {
      year: [
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
      ],
      quarter: [
        [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
        [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34],
      ],
      month: [
        [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
        [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98],
      ],
      week: [
        [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
        [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24],
      ],
    };
    // echarts
    var myChart = echarts.init(document.querySelector(".line"));
    var option = {
      tooltip: {
        trigger: "axis",
      },
      legend: {
        textStyle: {
          color: "#4c9bfd", // 图例文字颜色
        },
        right: "10%", // 距离右边10%
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        top: "20",
        containLabel: true,
        show: true,
        borderColor: "#012f4a",
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
        ],
        axisTick: {
          show: false, // 去除刻度线
        },
        axisLabel: {
          color: "#4c9bfd", // 文本颜色
        },
        axisLine: {
          show: false, // 去除轴线
        },
        boundaryGap: false, // 去除轴内间距
      },
      yAxis: {
        type: "value",
        axisTick: {
          show: false, // 去除刻度
        },
        axisLabel: {
          color: "#4c9bfd", // 文字颜色
        },
        splitLine: {
          lineStyle: {
            color: "#012f4a", // 分割线颜色
          },
        },
      },
      color: ["#00f2f1", "#ed3f35"],
      series: [
        {
          name: "预期销售额",
          data: data.year[0],
          type: "line",
          smooth: true,
        },
        {
          name: "实际销售额",
          data: data.year[1],
          type: "line",
          smooth: true,
        },
      ],
    };
    // 点击切换效果
    $(".sales .caption").on("click", "a", function () {
      $(this).addClass("active").siblings("a").removeClass("active");
      //   this.dataset.type 拿到自定义属性名的值
      var arr = data[this.dataset.type];
      // 点击后重置索引
      index = $(this).index() - 1;
      option.series[0].data = arr[0];
      option.series[1].data = arr[1];
      myChart.setOption(option); // 重新把数据给实例对象
    });
    // tab自动切换
    var as = $(".sales .caption a");
    var index = 0;
    var timer = setInterval(function () {
      as.eq(index).click();
      index++;
      if (index >= 4) {
        index = 0;
      }
    }, 1000);
    // 鼠标经过停止定时器,离开开启定时器
    $(".sales").hover(
      function () {
        clearInterval(timer);
      },
      function () {
        clearInterval(timer);
        timer = setInterval(function () {
          as.eq(index).click();
          index++;
          if (index >= 4) {
            index = 0;
          }
        }, 1000);
      }
    );
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  })();
  //-------------------- 右盒子-渠道 季度left
  (function () {
    var myChart = echarts.init(document.querySelector(".radar"));
    var option = {
      //   tooltip: {
      //     show: true,
      //     extraCssText: "z-index:999",
      //     confine: true,
      //   },
      radar: {
        radius: "65%",
        center: ["50%", "50%"],
        splitNumber: 4,
        indicator: [
          { name: "机场", max: 100 },
          { name: "商场", max: 100 },
          { name: "火车站", max: 100 },
          { name: "汽车站", max: 100 },
          { name: "地铁", max: 100 },
        ],
        shape: "circle",
        axisName: {
          color: "#4c9bfd",
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,0.5)",
          },
        },
        splitArea: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,0.5)",
          },
        },
      },
      series: [
        {
          name: "北京",
          type: "radar",
          lineStyle: {
            color: "#fff",
            width: 1,
            opacity: 0.5,
          },
          data: [[90, 19, 56, 11, 34, 76]],
          symbol: "circle",
          symbolSize: 5,
          itemStyle: {
            color: "#fff",
          },
          areaStyle: {
            color: "rgba(238,197,102,0.6)",
          },
          label: {
            show: true,
            color: "#fff",
            fontSize: 10,
          },
        },
      ],
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  })();
  //-------------------- 右盒子-渠道 季度right
  (function () {
    var myChart = echarts.init(document.querySelector(".gauge"));
    var option = {
      series: [
        {
          hoverOffset: 0,
          name: "销售进度",
          type: "pie",
          radius: ["130%", "150%"],
          center: ["48%", "80%"],
          labelLine: {
            show: false,
          },
          data: [
            {
              value: 1,
              itemStyle: {
                color: "#12274d",
              },
            },
            {
              value: 2,
              itemStyle: {
                color: "transparent",
              },
            },
            {
              value: 1,
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#00c9e0" },
                  { offset: 1, color: "#005fc1" },
                ]),
              },
            },
          ],
        },
      ],
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  })();
  //-------------------- 右盒子-排行
  (function () {
    var hotData = [
      {
        city: "北京", // 城市
        sales: "25,179", // 销售额
        flag: true, //  上升还是下降
        brands: [
          //  品牌种类数据
          { name: "可爱多", num: "9,086", flag: true },
          { name: "娃哈哈", num: "8,341", flag: true },
          { name: "喜之郎", num: "7,407", flag: false },
          { name: "八喜", num: "6,080", flag: false },
          { name: "小洋人", num: "6,724", flag: false },
          { name: "好多鱼", num: "2,170", flag: true },
        ],
      },
      {
        city: "河北",
        sales: "23,252",
        flag: false,
        brands: [
          { name: "可爱多", num: "3,457", flag: false },
          { name: "娃哈哈", num: "2,124", flag: true },
          { name: "喜之郎", num: "8,907", flag: false },
          { name: "八喜", num: "6,080", flag: true },
          { name: "小洋人", num: "1,724", flag: false },
          { name: "好多鱼", num: "1,170", flag: false },
        ],
      },
      {
        city: "上海",
        sales: "20,760",
        flag: true,
        brands: [
          { name: "可爱多", num: "2,345", flag: true },
          { name: "娃哈哈", num: "7,109", flag: true },
          { name: "喜之郎", num: "3,701", flag: false },
          { name: "八喜", num: "6,080", flag: false },
          { name: "小洋人", num: "2,724", flag: false },
          { name: "好多鱼", num: "2,998", flag: true },
        ],
      },
      {
        city: "江苏",
        sales: "23,252",
        flag: false,
        brands: [
          { name: "可爱多", num: "2,156", flag: false },
          { name: "娃哈哈", num: "2,456", flag: true },
          { name: "喜之郎", num: "9,737", flag: true },
          { name: "八喜", num: "2,080", flag: true },
          { name: "小洋人", num: "8,724", flag: true },
          { name: "好多鱼", num: "1,770", flag: false },
        ],
      },
      {
        city: "山东",
        sales: "20,760",
        flag: true,
        brands: [
          { name: "可爱多", num: "9,567", flag: true },
          { name: "娃哈哈", num: "2,345", flag: false },
          { name: "喜之郎", num: "9,037", flag: false },
          { name: "八喜", num: "1,080", flag: true },
          { name: "小洋人", num: "4,724", flag: false },
          { name: "好多鱼", num: "9,999", flag: true },
        ],
      },
    ];
    var supHTML = "";
    var subHTML = "";
    // 遍历添加数据
    $.each(hotData, function (index, item) {
      supHTML += `<li>
      <span>${item.city}</span>
      <span>${item.sales} <s class=${
        item.flag ? "icon-up" : "icon-down"
      }></s></span>
    </li>`;
    });
    $(".sup").html(supHTML);
    // 鼠标经过高亮显示
    function render(that) {
      that.addClass("active").siblings("li").removeClass("active");
      subHTML = "";
      // 遍历添加数据
      $.each(hotData[that.index()].brands, function (index, item) {
        subHTML += `<li><span>${item.name}</span><span>${item.num} <s class=${
          item.flag ? "icon-up" : "icon-down"
        }></s></span></li>`;
      });
      $(".sub").html(subHTML);
    }
    $(".province .sup").on("mouseenter", "li", function () {
      index = $(this).index();
      render($(this));
    });
    // 定时器
    var lis = $(".province .sup li");
    var index = 0;
    lis.eq(0).mouseenter();
    var timer = setInterval(function () {
      index++;
      if (index >= 5) {
        index = 0;
      }
      render(lis.eq(index));
    }, 1000);
    $(".province .sup").hover(
      function () {
        clearInterval(timer);
      },
      function () {
        clearInterval(timer);
        timer = setInterval(function () {
          index++;
          if (index >= 5) {
            index = 0;
          }
          render(lis.eq(index));
        }, 1000);
      }
    );
  })();
});
