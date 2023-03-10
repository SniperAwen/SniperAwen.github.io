## 使用

> 全部引入 `import "awen/style/class.css";`

> 单独引入 `import "awen/style/package/模块";`

## **base** 默认

> 引入 `import "awen/style/base.css";`

```css
margin: 0;
* {
  padding: 0;
  /* css3盒子模型 */
  box-sizing: border-box;
}
em,
i {
  font-style: normal;
}
li {
  list-style: none;
}
img {
  /* border 0 照顾低版本浏览器 如果 图片外面包含了链接会有边框的问题 */
  border: 0;
  /* 取消图片底侧有空白缝隙的问题 */
  vertical-align: middle;
}
button {
  /* 当我们鼠标经过button 按钮的时候，鼠标变成小手 */
  cursor: pointer;
}
a {
  color: #000;
  text-decoration: none;
}
ul {
  padding: 0px;
}
button,
input {
  /* 默认有灰色边框我们需要手动去掉 */
  border: 0;
  outline: none;
}
body {
  /* CSS3 抗锯齿形 让文字显示的更加清晰 */
  -webkit-font-smoothing: antialiased;
  color: #000;
}
view,
text {
  box-sizing: border-box;
}
```

## **scroll** 滚动条

> 引入 `import "awen/style/scroll/模块";`

#### default-thin

```css
/* 设置滚动条的样式 */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
/* 滚动槽 */
::-webkit-scrollbar-track {
  border-radius: 10px;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.2);
  border: 2px solid rgba(255, 255, 255, 0);
  background-clip: content-box;
}
```

#### default

```css
/* 设置滚动条的样式 */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
/* 滚动槽 */
::-webkit-scrollbar-track {
  border-radius: 10px;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.2);
  background-clip: content-box;
}
```

#### ranbow-thin

```css
/* 设置滚动条的样式 */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
/* 滚动槽 */
::-webkit-scrollbar-track {
  border-radius: 10px;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-image: linear-gradient(
    rgba(255, 0, 0, 0.75),
    rgba(255, 165, 0, 0.75),
    rgba(255, 255, 0, 0.75),
    rgba(0, 255, 0, 0.75),
    rgba(0, 255, 255, 0.75),
    rgba(0, 0, 255, 0.75),
    rgba(139, 0, 255, 0.75)
  );
  background-clip: content-box;
  border: 2px solid rgba(0, 0, 0, 0);
}
```

#### ranbow

```css
/* 设置滚动条的样式 */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
/* 滚动槽 */
::-webkit-scrollbar-track {
  border-radius: 10px;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-image: linear-gradient(
    rgba(255, 0, 0, 0.75),
    rgba(255, 165, 0, 0.75),
    rgba(255, 255, 0, 0.75),
    rgba(0, 255, 0, 0.75),
    rgba(0, 255, 255, 0.75),
    rgba(0, 0, 255, 0.75),
    rgba(139, 0, 255, 0.75)
  );
  background-clip: content-box;
}
```

## **background** 模块

> 引入 `import "awen/style/package/background.css";`

```css
.bg-noRepeat {
  background-repeat: no-repeat;
}
.bg-repeat {
  background-repeat: repeat;
}
.bg-fixed {
  background-attachment: fixed;
}
.bg-fixed {
  background-attachment: scroll;
}
.bg-cover {
  background-size: cover;
}

.bf-blur {
  backdrop-filter: blur(10px);
}
.bf-blur20 {
  backdrop-filter: blur(20px);
}
.bf-blur30 {
  backdrop-filter: blur(30px);
}
.bf-blur40 {
  backdrop-filter: blur(40px);
}
.bf-blur50 {
  backdrop-filter: blur(50px);
}
```

## **cursor** 模块

> 引入 `import "awen/style/package/cursor.css";`

```css
.c-pointer:hover {
  cursor: pointer !important;
}
.c-pointer {
  cursor: pointer !important;
}
.c-auto:hover {
  cursor: auto !important;
}
.c-auto {
  cursor: auto !important;
}
.c-crosshair:hover {
  cursor: crosshair !important;
}
.c-crosshair {
  cursor: crosshair !important;
}
.c-move:hover {
  cursor: move !important;
}
.c-move {
  cursor: move !important;
}
.c-wait:hover {
  cursor: wait !important;
}
.c-wait {
  cursor: wait !important;
}
.c-help:hover {
  cursor: help !important;
}
.c-help {
  cursor: help !important;
}
```

## **display** 模块

> 引入 `import "awen/style/package/display.css";`

```css
.flex {
  display: flex !important;
}
.block {
  display: block !important;
}
.inBlock {
  display: inline-block !important;
}
.inline {
  display: inline !important;
}
.hide,
.none {
  display: none !important;
}
```

## **flex** 模块

> 引入 `import "awen/style/package/flex.css";`

```css
.jc-between {
  justify-content: space-between;
}
.jc-around {
  justify-content: space-around;
}
.jc-evenly {
  justify-content: space-evenly;
}
.jc-center {
  justify-content: center;
}
.jc-left {
  justify-content: left;
}
.jc-right {
  justify-content: right;
}

.ai-center {
  align-items: center;
}
.ai-end {
  align-items: flex-end;
}
.ai-start {
  align-items: flex-start;
}

.f-wrap {
  flex-wrap: wrap;
}
.f-nowrap {
  flex-wrap: nowrap;
}

.f-column {
  flex-direction: column;
}
.f-shrink {
  flex-shrink: 0;
}

.flex1 {
  flex: 1;
}
.flex2 {
  flex: 2;
}
.flex3 {
  flex: 3;
}
.flex4 {
  flex: 4;
}
.flex5 {
  flex: 5;
}
.flex6 {
  flex: 6;
}
.flex7 {
  flex: 7;
}
.flex8 {
  flex: 8;
}
.flex9 {
  flex: 9;
}
.flex10 {
  flex: 10;
}
```

## **float** 模块

> 引入 `import "awen/style/package/float.css";`

```css
.float-left {
  float: left;
}
.float-left {
  float: right;
}
.float-none {
  float: none;
}

.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
}
.clearfix {
  *zoom: 1;
}
```

## **position** 模块

> 引入 `import "awen/style/package/position.css";`

```css
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
.fixed {
  position: fixed;
}
.static {
  position: static;
}
.sticky {
  position: sticky;
}
```

## **text** 模块

> 引入 `import "awen/style/package/text.css";`

```css
.ta-center {
  text-align: center;
}
.ta-left {
  text-align: left;
}
.ta-right {
  text-align: right;
}

.td-underline {
  text-decoration: underline;
}
.td-overline {
  text-decoration: overline;
}
.td-none {
  text-decoration: overline;
}
.td-lineThrough {
  text-decoration: line-through;
}

.t-indent1 {
  text-indent: 1em;
}
.t-indent2 {
  text-indent: 2em;
}
.t-indent3 {
  text-indent: 3em;
}
.t-indent4 {
  text-indent: 4em;
}

.t-row1 {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.t-row2 {
  display: -webkit-box !important;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.t-row3 {
  display: -webkit-box !important;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.t-row4 {
  display: -webkit-box !important;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
}
.t-row5 {
  display: -webkit-box !important;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
}
.t-row6 {
  display: -webkit-box !important;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  overflow: hidden;
}
.t-row7 {
  display: -webkit-box !important;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 7;
  overflow: hidden;
}
.t-row8 {
  display: -webkit-box !important;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 8;
  overflow: hidden;
}
.t-row9 {
  display: -webkit-box !important;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 9;
  overflow: hidden;
}
.t-row10 {
  display: -webkit-box !important;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 10;
  overflow: hidden;
}
```
