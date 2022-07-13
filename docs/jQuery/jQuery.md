# jQuery

> jQuery 是一个 JavaScript 库
>
> 文档 https://jquery.cuishifeng.cn/
>
> 白学了，时代的眼泪

# jQuery 对象

> jQuery 中利用选择器获取到的并非原生的 DOM 对象，而是 jQuery 对象
>
> jQuery 对象 和 DOM 对象 的语法不能混用

```javascript
//  语法
$("选择器");
// 修改背景色
$("选择器").css("backgroundColor", "yellowgreen");
// jQuery 获取p标签 改变背景色为 粉色
$("p").style.backgroundColor = "pink";
```

# jQuery 链式编程

```javascript
$(".text").focus(回调函数).blur(回调函数).change(回调函数);
```

# jQuery 事件

## 事件绑定

> 事件名开头不需要写 on
>
> 回调函数中的 this 就是触发事件的 dom 元素

```javascript
$("选择器").事件名(function () {
  //  逻辑....
});
// 1. 注册事件
.on('事件名', function(){})
// 2. 移除指定事件
.off('事件名')
// 3. 移除所有事件
.off()
// 4. 注册一次性事件
.one('事件名', function(){})

// 滚动
$(window).scroll(function () {})
//  点击
$(window).click(function () {})
```

## 触发事件

```javascript
// 1. 初始状态
$(".words span").text(0);
$(".publish_btn").addClass("disabled");
// 1. 直接触发
.事件名()
// 2. trigger触发
.trigger('事件名')
// 3. 触发自定义事件
.trigger('自定义事件')
// 4. 注册自定义事件
.on('自定义事件',function(){})

```

## 事件参数

```javascript
$("选择器").事件(function (event) {
  event.stopPropagation();
});
```

## 事件委托

```javascript
// 直接绑定
$("选择器").on("事件名", function () {});
// 事件委托
$("祖先选择器").on("事件名", "后代选择器", function () {});
```

## 提交事件

```html
<form>
    <input type="text" placeholder="用户名" />   <br />
    <input type="password" placeholder="密码" />   <br />
    <input type="submit" value="提交" />   <button>提交</button>
</form>
<script>
  $("form").submit(function (event) {
    // 阻止默认行为
    event.preventDefault(); // 阻止默认行为
    return false;
  });
</script>
```

# jQuery 操纵

## 获取 dom 对象

```javascript
// 播放视频
$("video").trigger("play");
// 暂停视频
$("video").trigger("pause");
// 重置表单
// 中括号获取
$("form")
  .trigger("reset")
  // get方法获取
  .get(索引)[索引];
```

## 内容操纵

> 设置时: html 方法解析标签 , text 不解析标签
>
> 取值时: html 方法获取标签 , text 只获取文本

```javascript
//  设置
$(‘选择器’).html('内容')
$(‘选择器’).text("内容")
//  读取
$('选择器').html()
$('选择器').text()
```

## 操纵 value

```javascript
// 1. 赋值
.val('参数')
// 2. 取值
.val()

```

## 属性操纵

```javascript
// 1.赋值
.attr('属性名','值')
// 2.取值
.attr('属性名')
// 3.删除属性
.removeAttr('属性名')

```

## 样式操纵

> 数值类的样式省略单位,默认会使用 px
>
> 获取样式需要传递样式名

```javascript
// 1.  键值对设置
.css('样式名','值')
.css('backgroundColor','pink')
.css('color','red')
.css('width','200px')
.css('height',200)
// 2. 对象方式设置
.css(对象)
.css({
  backgroundColor:'pink',
  color:'red',
  width:'200px',
  height:200
})
// 3. 样式获取
.css('样式名')
.css('width')

```

## 操纵类名

```javascript
$("选择器")
  .css({
    backgroundColor: "orange",
  })
  // 1. 添加类名
  .addClass("类名")
  // 2. 移除类名
  .removeClass("类名")
  // 3. 判断类名 返回布尔值
  .hasClass("类名")
  // 4. 切换类名
  .toggleClass("类名");
```

# jQuery 过滤

```javascript
//   匹配的第一个元素
.first()
//  匹配的最后一个元素
.last()
//  根据索引匹配元素
.eq(索引)
```

# jQuery 获取

## 获取位置

```javascript
// 取值
$('选择器').offset()
// 取值
$('选择器').position()
// 返回值
{top: 126, left: 58}
```

## 获取滚动距离

```javascript
// 取值
$("选择器").scrollLeft();
$("选择器").scrollTop();
// 赋值
$("选择器").scrollLeft(值);
$("选择器").scrollTop(值);
```

## 获取尺寸

```javascript
$("选择器").width(); // 内容宽度
$("选择器").height(); // 内容高度
$("选择器").innerWidth(); // 内容宽度 + 内边距
$("选择器").innerHeight(); // 内容高度 + 内边距
$("选择器").outerWidth(); // 内容宽度 + 内边距 + 边框
$("选择器").outerHeight(); // 内容高度 + 内边距 + 边框
$("选择器").outerWidth(true); // 内容宽度 + 内边距 + 边框 + 外边距
$("选择器").outerHeight(true); // 内容高度 + 内边距 + 边框 + 外边距
```

# jQuery 节点操作

## 插入节点

```javascript
// 4个方法参数一样  位置不同
$("父元素选择器").append(参数); // 父元素结尾
$("父元素选择器").prepend(参数); // 父元素开头
$("兄弟元素选择器").before(参数); // 兄弟元素前面
$("兄弟元素选择器").after(参数); // 兄弟元素后面
```

## 删除节点

```javascript
jQuery对象.remove();
```

## 查找节点

```javascript
// 1. 父元素
.parent()
// 2. 子元素 
.children()
// 3. 兄弟元素
.siblings()
// 4. 后代元素
.find('选择器')

```

# jQuery 入口函数

```javascript
// 完整写法
$(document).ready(function () {});
// 简化写法
$(function () {});
```

# jQuery 动画

## 显示&隐藏动画

```javascript
// 显示
$("选择器").show(持续时间);
// 隐藏
$("选择器").hide(持续时间);
// 显示&隐藏
$("选择器").toggle(持续时间);
```

## 淡入&淡出动画

```javascript
// 淡入
$("选择器").fadeIn(持续时间);
// 淡出
$("选择器").fadeOut(持续时间);
// 淡入&淡出
$("选择器").fadeToggle(持续时间);
```

## 展开&收起动画

```javascript
// 展开
$("选择器").slideDown(持续时间);
// 收起
$("选择器").slideUp(持续时间);
// 展开&收起
$("选择器").slideToggle(持续时间);
```

## 动画队列及停止方法

```javascript
// 停止当前动画
$("选择器").stop();
// 清空队列 在动画当前状态停止
$("选择器").stop(true);
// 清空队列 直接到当前动画的结束状态
$("选择器").stop(true, true);
```

## 自定义动画

```javascript
$('选择器').animate({
  width: 100,
  height: '100%',
  margin: '100px',
  ...
})
$('选择器').animate({
  scrollTop: 100,
  scrollLeft: 100
})
$('选择器').animate(动画属性, 持续时间)

```

## 动画的回调函数

```javascript
$("选择器").基础动画方法(回调函数);
$("选择器").基础动画方法(持续时间, 回调函数);
$("选择器").animate(属性, 回调函数);
$("选择器").animate(属性, 持续时间, 回调函数);
```

## 动画的延迟方法

```javascript
$("选择器").delay(延迟时间).动画方法();
$("选择器").delay(延迟时间).动画方法().delay(延迟时间).动画方法();
```

# jQuery Ajax

> Ajax 的全称是 Asynchronous Javascript And XML（异步 JavaScript 和 XML）。

## $.get()

```javascript
$.get(url, [data], [callback]);
```

| 参数名   | 参数类型 | 是否必选 | 说明                     |
| -------- | -------- | -------- | ------------------------ |
| url      | string   | 是       | 要请求的资源地址         |
| data     | object   | 否       | 请求资源期间要携带的参数 |
| callback | function | 否       | 请求成功时的回调函数     |

## $.post()

```javascript
$.post(url, [data], [callback]);
```

| 参数名   | 参数类型 | 是否必选 | 说明                     |
| -------- | -------- | -------- | ------------------------ |
| url      | string   | 是       | 提交数据的地址           |
| data     | object   | 否       | 要提交的数据             |
| callback | function | 否       | 数据提交成功时的回调函数 |

## $.ajax()

```javascript
$.ajax({
  type: "", // 请求的方式，例如 GET 或 POST
  url: "", // 请求的 URL 地址
  data: {}, // 这次请求要携带的数据
  success: function (res) {}, // 请求成功之后的回调函数
});
```

## JSONP

```javascript
$.ajax({
  url: "http://ajax.frontend.itheima.net:3006/api/jsonp?name=zs&age=20",
  // 如果要使用 $.ajax() 发起 JSONP 请求，必须指定 datatype 为 jsonp
  dataType: "jsonp",
  success: function (res) {
    console.log(res);
  },
});
```
