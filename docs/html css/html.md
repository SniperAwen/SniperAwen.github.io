# HTML

- HTML（Hyper Text Markup Language）中文译为：超文本标记语言
- 专门用于网页开发的语言，主要通过 HTML 标签对网页中的文本、图片、音频、视频等内容进行描述
  ![alt text](./image/html21.png)

## Web 标准的构成

| 构成 | 语言       | 说明                                               |
| ---- | ---------- | -------------------------------------------------- |
| 结构 | HTML       | 页面元素和内容                                     |
| 表现 | CSS        | 网页元素的外观和位置等页面样式（如：颜色、大小等） |
| 行为 | JavaScript | 网页模型的定义与页面交互                           |

## HTML 骨架结构

- html 标签：网页的整体
- head 标签：网页的头部
- body 标签：网页的身体
- title 标签：网页的标题

![alt text](./image/html25.png)
![alt text](./image/html26.png)
![alt text](./image/html27.png)

## HTML 标签结构

![alt text](./image/html01.png)

- 标签由<、>、/、英文单词或字母组成。并且把标签中<>包括起来的英文单词或字母称为标签名
  - 双标签：前部分叫开始标签，后部分叫结束标签，两部分之间包裹内容
  - 单标签：自成一体，无法包裹内容

## HTML 标签属性

![alt text](./image/html02.png)

1. 标签的属性写在开始标签内部
2. 标签上可以同时存在多个属性
3. 属性之间以空格隔开
4. 标签名与属性之间必须以空格隔开
5. 属性之间没有顺序之分

## SEO 三大标签

![alt text](./image/html28.png)
![alt text](./image/html29.png)

## ico 图标

![alt text](./image/html30.png)

## 常用标签

### 语义化标签

![alt text](./image/html19.png)

### 文本格式标签

| 标签   | 说明   |
| ------ | ------ |
| b      | 加粗   |
| u      | 下划线 |
| i      | 倾斜   |
| s      | 删除线 |
| strong | 加粗   |
| ins    | 下划线 |
| em     | 倾斜   |
| del    | 删除线 |

### 音频标签

- 场景：在页面中插入音频
- 代码：`<audio src="" controls></audio>`
- 常见属性：
  |属性名|功能|
  |---|---|
  |src|音频的路径|
  |controls|显示播放的控件|
  |autoplay|自动播放(部分浏览器不支持)|
  |loop|循环播放|

### 视频标签

- 场景：在页面中插入视频
- 代码：`<video src="" controls></video>`
- 常见属性：
  |属性名|功能|
  |---|---|
  |src|视频的路径|
  |controls|显示播放的控件|
  |autoplay|自动播放(Chrome 需要配合 muted 实现静音播放)|
  |loop|循环播放|

### 链接标签

- 场景：：点击之后，从一个页面跳转到另一个页面
- 代码：`<a href="javascript:;">空链接</a>`
- target 属性：
  |取值|效果|
  |---|---|
  |\_self|默认值，在当前窗口中跳转|
  |\_blank|在新窗口中跳转|

### 列表标签

- 场景：在网页中按照行展示关联性的内容，如：新闻列表、排行榜、账单等
- 特点：按照行的方式，整齐显示内容
- 种类：无序列表、有序列表、自定义列表
- 无序列表：
  |标签名|说明|
  |---|---|
  |ul|无序列表的整体，用于包裹 li 标签|
  |li|表示无序列表的每一项，用于包含每一行的内容|

  - 列表的每一项前默认显示圆点标识
  - ul 标签中只允许包含 li 标签
  - li 标签可以包含任意内容

- 有序列表：
  |标签名|说明|
  |---|---|
  |ol|有序列表的整体，用于包裹 li 标签|
  |li|表示有序列表的每一项，用于包含每一行的内容|

  - 列表的每一项前默认显示序号标识
  - ol 标签中只允许包含 li 标签
  - li 标签可以包含任意内容

- 自定义列表：
  |标签名|说明|
  |---|---|
  |dl|自定义列表的整体，用于包裹 dt/dd 标签|
  |dt|表示自定义列表的主题|
  |dd|表示自定义列表的针对主题的每一项内容|

  - dd 前会默认显示缩进效果
  - dl 标签中只允许包含 dt/dd 标签
  - dt/dd 标签可以包含任意内容

### 表格标签

![alt text](./image/html03.png)
![alt text](./image/html04.png)
![alt text](./image/html05.png)
![alt text](./image/html06.png)

### 表单标签

![alt text](./image/html07.png)
![alt text](./image/html08.png)
![alt text](./image/html09.png)
![alt text](./image/html10.png)
![alt text](./image/html11.png)
![alt text](./image/html12.png)
![alt text](./image/html13.png)
![alt text](./image/html14.png)
![alt text](./image/html15.png)
![alt text](./image/html16.png)
![alt text](./image/html17.png)
![alt text](./image/html18.png)

## 特殊字符

![alt text](./image/html20.png)

## Flex 布局

- Flex 布局/弹性布局：
  - 是一种浏览器提倡的布局模型
  - 布局网页更简单、灵活
  - 避免浮动脱标的问题

![alt text](./image/web9.png)

### 主轴对齐方式

![alt text](./image/web10.png)

### 侧轴对齐方式

![alt text](./image/web11.png)

### 主轴方向

![alt text](./image/web12.png)

### 弹性盒子换行

![alt text](./image/web13.png)

## 适配自适应

### rem 适配

![alt text](./image/web15.png)

### 媒体查询

![alt text](./image/web16.png)
![alt text](./image/web17.png)
![alt text](./image/web20.png)
![alt text](./image/web21.png)
![alt text](./image/web22.png)
![alt text](./image/web23.png)
![alt text](./image/web24.png)

### 适配原理

![alt text](./image/web18.png)

### flexible

![alt text](./image/web19.png)

## Emmet 语法

![alt text](./image/css17.png)

## 移动端 Web

### 视口

![alt text](./image/web5.png)

### 二倍图

![alt text](./image/web6.png)
![alt text](./image/web7.png)
![alt text](./image/web8.png)
