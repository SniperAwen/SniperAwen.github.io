# React

![React Logo](./images/react_logo.jpeg)

> react 是一个用于构建用户**界面**的 JavaScript 库
>
> react 官网(<https://reactjs.org/>)
>
> react 中文网(https://zh-hans.reactjs.org/)

- React 是一个用于构建用户界面的 JavaScript 库
- 如果从 mvc 的角度来看，React 仅仅是视图层（V）的解决方案。也就是只负责视图的渲染，并非提供了完整了 M 和 C 的功能
- react/react-dom/react-router/redux: 框架
- React 起源于 Facebook 内部项目（News Feed，2011），后又用来架设 Instagram 的网站（2012），并于 2013 年 5 月开源[react 介绍](https://baike.baidu.com/item/react/18077599?fr=aladdin)

- React 是最流行的前端开发框架之一，其他：Vue、Angular 等等[框架对比](https://www.npmtrends.com/react-vs-vue-vs-@angular/core)

## react 特点

### 声明式 UI

你只需要描述 UI（HTML）看起来是什么样的，就跟写 HTML 一样

```js
const jsx = (
  <div className="app">
    <h1>Hello React! 动态数据变化:{count}</h1>
  </div>
);
```

### 组件化

- 组件是 react 中**最重要**的内容
- 组件用于表示页面中的部分内容
- 组合、复用多个组件，就可以实现完整的页面功能

![](images/组件-1629115179921.png)

### 学习一次，随处使用

- 使用 react/rect-dom 可以开发 Web 应用
- 使用 react/react-native 可以开发移动端原生应用（react-native） RN 安卓 和 ios 应用 flutter
- 使用 react 可以开发 VR（虚拟现实）应用（react360）

![](images/react-use-1629115179922.png)

## React CLI

- 命令：`npx create-react-app react-basic`
  - npx create-react-app 是固定命令，`create-react-app` 是 React 脚手架的名称
  - react-basic 表示项目名称，可以修改
- 启动项目：`yarn start` or `npm start`
- `npx` 是 npm v5.2 版本新添加的命令，用来简化 npm 中工具包的使用
  - 原始：
    - 全局安装`npm i -g create-react-app` 2 在通过脚手架的命令来创建 React 项目
  - 现在：
    - npx 调用最新的 create-react-app 直接创建 React 项目

### 基本使用

- 使用步骤

```
- 导入react和react-dom
- 创建react元素(虚拟DOM)
- 渲染react元素到页面中
```

- 导入 react 和 react-dom

```js
// 导入react和react-dom
import React from "react";
import ReactDOM from "react-dom";
```

- 创建 react 元素

```js
// 创建元素
const title = React.createElement("h1", null, "hello react");
```

- 渲染 react 元素到页面

```js
// 渲染react元素
ReactDOM.render(title, document.getElementById("root"));
```

- 使用 sass

```js
// 内置node-sass
npm install sass
```

- CSS IN JS

```js
// 内置CSS Modules
xxx.css改成xxx.module.scss;
import styles from "./index.module.scss";
<div className={styles.fatherBox}></div>;

// 不会被改类名
.fatherBox{
  :global{
    .iconfont{
      color:red;
    }
  }
}
```

## JSX

### JSX 简介

`JSX`是`JavaScript XML`的简写，表示了在 Javascript 代码中写 XML(HTML)格式的代码

优势：声明式语法更加直观，与 HTML 结构相同，降低学习成本，提高开发效率。

**JSX 是 react 的核心内容**

注意：_JSX 不是标准的 JS 语法，是 JS 的语法扩展。脚手架中内置的 [@babel/plugin-transform-react-jsx](@babel/plugin-transform-react-jsx) 包，用来解析该语法。_

![JSX 声明式vs命令式](images/JSX 声明式 vs 命令式-1629116328806.png)

### 使用步骤

```
- 导入react和reactDOM包
- 使用jsx语法创建react元素
- 把react元素渲染到页面中
```

- 导入 react 和 reactDOM

```js
// 导入react和react-dom
import React from "react";
import ReactDOM from "react-dom";
```

- 创建 react 元素

```js
// 创建元素
const title = <h1 title="哈哈"></h1>;
```

- 渲染元素

```js
// 渲染元素
ReactDOM.render(title, document.getElementById("root"));
```

### JSX 注意点

- 只有在脚手架中才能使用 jsx 语法
  - 因为 JSX 需要经过 babel 的编译处理，才能在浏览器中使用。脚手架中已经默认有了这个配置。
- JSX 必须要有一个根节点， `<></>` `<React.Fragment></React.Fragment>`
- 没有子节点的元素可以使用`/>`结束

- JSX 中语法更接近与 JavaScript
  - `class` =====> `className`
  - `for`========> `htmlFor`
- JSX 可以换行，如果 JSX 有多行，推荐使用`()`包裹 JSX，防止自动插入分号的 bug

### 嵌入 JavaScript 表达式

> 在 jsx 中可以在`{}`来使用 js 表达式

- 基本使用

```js
const name = "zs";
const age = 18;
const title = (
  <h1>
    姓名：{name}, 年龄：{age}
  </h1>
);
```

- 可以访问对象的属性

```js
const car = {
  brand: "玛莎拉蒂",
};
const title = <h1>汽车：{car.brand}</h1>;
```

- 可以访问数组的下标

```js
const friends = ["张三", "李四"];
const title = <h1>汽车：{friends[1]}</h1>;
```

- 可以使用三元运算符

```js
const gender = 18;
const title = <h1>性别：{age >= 18 ? "是" : "否"}</h1>;
```

- 可以调用方法

```js
function sayHi() {
  return "你好";
}
const title = <h1>姓名：{sayHi()}</h1>;
```

- JSX 本身

```js
const span = <span>我是一个span</span>;
const title = <h1>盒子{span}</h1>;
```

- JSX 中的注释

```js
{/* 这是jsx中的注释 */}   推荐快键键 ctrl + /
```

- 不要出现语句，比如`if` `for`

## 条件/列表渲染

### 条件渲染

> 在 react 中，一切都是 javascript，所以条件渲染完全是通过 js 来控制的

- 通过判断`if/else`控制

```js
const isLoding = false;
const loadData = () => {
  if (isLoding) {
    return <div>数据加载中.....</div>;
  } else {
    return <div>数据加载完成，此处显示加载后的数据</div>;
  }
};

const title = <div>条件渲染：{loadData()}</div>;
```

- 通过三元运算符控制

```js
const isLoding = false;
const loadData = () => {
  return isLoding ? (
    <div>数据加载中.....</div>
  ) : (
    <div>数据加载完成，此处显示加载后的数据</div>
  );
};
```

- 逻辑运算符

```js
const isLoding = false;
const loadData = () => {
  return isLoding && <div>加载中...</div>;
};

const title = <div>条件渲染：{loadData()}</div>;
```

### 列表渲染

> 我们经常需要遍历一个数组来重复渲染一段结构
>
> 在 react 中，通过 map 方法进行列表的渲染

- 列表的渲染

```js
const songs = ["温柔", "倔强", "私奔到月球"];

const list = songs.map((song) => <li>{song}</li>);

const dv = (
  <div>
    <ul>{list}</ul>
  </div>
);
```

- 直接在 JSX 中渲染

```js
const songs = ["温柔", "倔强", "私奔到月球"];

const dv = (
  <div>
    <ul>
      {songs.map((song) => (
        <li>{song}</li>
      ))}
    </ul>
  </div>
);
```

- key 属性的使用

```js
const dv = (
  <div>
    <ul>
      {songs.map((song) => (
        <li key={song}>{song}</li>
      ))}
    </ul>
  </div>
);
```

**注意：列表渲染时应该给重复渲染的元素添加 key 属性，key 属性的值要保证唯一**

**注意：key 值避免使用 index 下标，因为下标会发生改变**

## 样式处理

### 行内样式-style

```js
const dv = (
  <div style={{ color: "red", backgroundColor: "pink" }}>style样式</div>
);
```

### 类名-className

```js
// 导入样式
import "./base.css";
const dv = <div className="title">style样式</div>;
```

base.css 样式文件

```css
.title {
  text-align: center;
  color: red;
  background-color: pink;
}
```

## React 组件

### 函数组件

> 函数组件：使用 JS 的函数或者箭头函数创建的组件

- 为了区分普通标签，函数组件的名称必须`大写字母开头`
- 函数组件`必须有返回值`，表示该组件的结构
- 如果返回值为 null,表示不渲染任何内容

使用函数创建组件

```js
function Hello() {
  return <div>这是我的函数组件</div>;
}
```

使用箭头函数创建组件

```js
const Hello = () => <div>这是一个函数组件</div>;
```

使用组件

```js
ReactDOM.render(<Hello />, document.getElementById("root"));
```

### 类组件

> 类组件：使用 ES6 的 class 语法创建组件

约定 1：类组件的名称必须是大写字母开头

约定 2：类组件应该继承`React.Component`父类，从而可以使用父类中提供的方法或者属性

约定 3：类组件必须提供`render`方法

约定 4：render 方法`必须有返回值`,表示该组件的结构

定义组件

```js
class Hello extends React.Component {
  render() {
    return <div>这是一个类组件</div>;
  }
}
```

使用组件

```js
ReactDOM.render(<Hello />, document.getElementById("root"));
```

### 有状态组件和无状态组件

- 函数组件又叫做**无状态组件** 函数组件是不能自己提供数据【前提：基于 hooks 之前说的】
- 类组件又叫做**有状态组件** 类组件可以自己提供数据，，，，组件内部的状态（数据如果发生了改变，内容会自动的更新）数据驱动视图
- 状态（state）即组件的私有数据，当组件的状态发生了改变，页面结构也就发生了改变。
- 函数组件是没有状态的，只负责页面的展示（静态，不会发生变化）性能比较高
- 类组件有自己的状态，负责**更新 UI**，只要类组件的数据发生了改变，UI 就会发生更新。
- 在复杂的项目中，一般都是由函数组件和类组件共同配合来完成的。【增加了使用者的负担，所以后来有了 hooks】

比如计数器案例，点击按钮让数值+1， 0 和 1 就是不同时刻的状态，当状态从 0 变成 1 之后，UI 也要跟着发生变化。React 想要实现这种功能，就需要使用有状态组件来完成。

![](images/state组件.png)

### 类组件的状态

- 状态`state`即数据，是组件内部的`私有数据`,只有在组件内部可以使用
- `state的值是一个对象`,表示一个组件中可以有多个数据
- state 的基本使用

```js
class Hello extends React.Component {
  constructor() {
    super();
    // 组件通过state提供数据
    this.state = {
      msg: "hello react",
    };
  }
  render() {
    return <div>state中的数据--{this.state.msg}</div>;
  }
}
```

- 简洁的语法

```js
class Hello extends React.Component {
  state = {
    msg: "hello react",
  };
  render() {
    return <div>state中的数据--{this.state.msg}</div>;
  }
}
```

## 事件处理

### 注册事件

React 注册事件与 DOM 的事件语法非常像

语法`on+事件名=｛事件处理程序｝` 比如`onClick={this.handleClick}`

注意：**React 事件采用驼峰命名法**，比如`onMouseEnter`, `onClick`

```js
class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>点我</button>
      </div>
    );
  }

  handleClick() {
    console.log("点击事件触发了");
  }
}
```

### 事件对象

- 可以通过事件处理程序的参数获取到事件对象

```js
function handleClick(e) {
  e.preventDefault();
  console.log("事件对象", e);
}
<a onClick={this.handleClick}>点我，不会跳转页面</a>;
```

### this 指向问题

> 事件处理程序中的 this 指向的是 undefined
>
> render 方法中的 this 指向的而是当前 react 组件。**只有事件处理程序中的 this 有问题**

```js
class App extends React.Component {
  state = {
    msg: "hello react",
  };
  handleClick() {
    console.log(this.state.msg);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>点我</button>
      </div>
    );
  }
}
```

### this 指向问题解决方案

```js
方案1：箭头函数
方案2：bind修改this指向
方案3：类实例方法
```

- 在 render 中使用箭头函数

箭头函数的特点：自身没有 this，访问的是外部的 this

方式 1：

```js
class App extends React.Component {
  state = {
    msg: 'hello react'
  }
  render() {
    return (
      <div>
        <button onClick={() => { console.log(this.state.msg) }>点我</button>
      </div>
    )
  }
}
```

缺点：会把大量的 js 处理逻辑放到 JSX 中，将来不容易维护

方式 2

```js
class App extends React.Component {
  state = {
    msg: "hello react",
  };
  handleClick() {
    console.log(this.state.msg);
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.handleClick();
          }}
        >
          点我
        </button>
      </div>
    );
  }
}
```

缺点：把大量的 js 逻辑写在了 JSX 结构中，不好维护

- 解决方案 2：使用 bind

```js
class App extends React.Component {
  state = {
    msg: "hello react",
  };
  handleClick() {
    console.log(this.state.msg);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>点我</button>
      </div>
    );
  }
}
```

或者

```js
class App extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  state = {
    msg: "hello react",
  };
  handleClick() {
    console.log(this.state.msg);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>点我</button>
      </div>
    );
  }
}
```

- 解决方案 3：class 实例方法

```js
class App extends React.Component {
  state = {
    msg: "hello react",
  };

  handleClick = () => {
    console.log(this.state.msg);
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>点我</button>
      </div>
    );
  }
}
```

**注意：这个语法是试验性的语法，但是有 babel 的转义，所以没有任何问题**

## 表单处理

> 我们在开发过程中，经常需要操作表单元素，比如获取表单的值或者是设置表单的值。

react 中处理表单元素有两种方式：

- 受控组件
- 非受控组件（DOM 操作）

### 受控组件基本概念

- HTML 中表单元素是可输入的，即表单用户并维护着自己的可变状态（value）。

- 但是在 react 中，可变状态通常是保存在 state 中的，并且要求状态只能通过`setState`进行修改。

- React 中将 state 中的数据与表单元素的 value 值绑定到了一起，`由state的值来控制表单元素的值`
- 受控组件：**value 值受到了 react 控制的表单元素**

![](images/受控组件.png)

### 受控组件使用步骤

1. 在 state 中添加一个状态，作为表单元素的 value 值（控制表单元素的值）
2. 给表单元素添加 change 事件，设置 state 的值为表单元素的值（控制值的变化）

```js
class App extends React.Component {
  state = {
    msg: "hello react",
  };

  handleChange = (e) => {
    this.setState({
      msg: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.msg}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
```

### 常见的受控组件

- 文本框、文本域、下拉框（操作 value 属性）
- 复选框（操作 checked 属性）

```js
class App extends React.Component {
  state = {
    usernmae: "",
    desc: "",
    city: "2",
    isSingle: true,
  };

  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleDesc = (e) => {
    this.setState({
      desc: e.target.value,
    });
  };
  handleCity = (e) => {
    this.setState({
      city: e.target.value,
    });
  };
  handleSingle = (e) => {
    this.setState({
      isSingle: e.target.checked,
    });
  };

  render() {
    return (
      <div>
        姓名：
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleName}
        />
        <br />
        描述：<textarea
          value={this.state.desc}
          onChange={this.handleDesc}
        ></textarea>
        <br />
        城市：
        <select value={this.state.city} onChange={this.handleCity}>
          <option value="1">北京</option>
          <option value="2">上海</option>
          <option value="3">广州</option>
          <option value="4">深圳</option>
        </select>
        <br />
        是否单身：
        <input
          type="checkbox"
          checked={this.state.isSingle}
          onChange={this.handleSingle}
        />
      </div>
    );
  }
}
```

### 多表单元素的优化

问题：每个表单元素都需要一个单独的事件处理程序，处理太繁琐

优化：使用一个事件处理程序处理多个表单元素

步骤

- 给表单元素添加 name 属性，名称与 state 属性名相同
- 根据表单元素类型获取对应的值
- 在事件处理程序中通过`[name]`修改对应的 state

```js
class App extends React.Component {
  state = {
    username: "",
    desc: "",
    city: "2",
    isSingle: true,
  };

  handleChange = (e) => {
    let { name, type, value, checked } = e.target;
    console.log(name, type, value, checked);
    value = type === "checkbox" ? checked : value;
    console.log(name, value);
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div>
        姓名：
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <br />
        描述：<textarea
          name="desc"
          value={this.state.desc}
          onChange={this.handleChange}
        ></textarea>
        <br />
        城市：
        <select
          name="city"
          value={this.state.city}
          onChange={this.handleChange}
        >
          <option value="1">北京</option>
          <option value="2">上海</option>
          <option value="3">广州</option>
          <option value="4">深圳</option>
        </select>
        <br />
        是否单身：
        <input
          type="checkbox"
          name="isSingle"
          checked={this.state.isSingle}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
```

### 非受控组件-ref

> 非受控组件借助于 ref，使用原生 DOM 的方式来获取表单元素的值

使用步骤

- 调用`React.createRef()`方法创建一个 ref

```js
constructor() {
  super()
  this.txtRef = React.createRef()
}
txtRef = React.createRef()
```

- 将创建好的 ref 对象添加到文本框中

```js
<input type="text" ref={this.txtRef} />
```

- 通过 ref 对象获取文本框的值

```js
handleClick = () => {
  console.log(this.txtRef.current.value);
};
```

非受控组件用的不多，推荐使用受控组件

## 组件通讯

**组件**是独立且封闭的单元，默认情况下，只能使用组件自己的数据。在组件化过程中，我们将一个完整的功能
拆分成多个组件，以更好的完成整个应用的功能。而在这个过程中，多个组件之间不可避免的要共享某些数据
。为了实现这些功能，就需要打破组件的独立封闭性，让其与外界沟通。这个过程就是**组件通讯**。

### props

- 组件是封闭的，要接收外部数据应该通过 props 来实现
- **props 的作用：接收传递给组件的数据**
- 传递数据：给组件标签添加属性
- 接收数据：函数组件通过参数 props 接收数据，类组件通过 this.props 接收数据

### 函数组件通讯

子组件

```js
function Hello(props) {
  console.log(props);
  return <div>接收到数据：{props.name}</div>;
}
```

父组件

```js
<Hello name="jack" age={19} />
```

### 类组件通讯

子组件

```js
class Hello extends React.Component {
  render() {
    return <div>接收到的数据：{this.props.age}</div>;
  }
}
```

父组件

```js
<Hello name="jack" age={19} />
```

### props 的特点

- 可以给组件传递任意类型的数据
- props 是只读的，不允许修改 props 的数据

- 注意：在类组件中使用的时候，**需要把 props 传递给 super()**，否则构造函数无法获取到 props

```js
class Hello extends React.Component {
  constructor(props) {
    // 推荐将props传递给父类构造函数
    super(props);
  }
  render() {
    return <div>接收到的数据：{this.props.age}</div>;
  }
}
```

### 父传子

1. 父组件提供要传递的 state 数据
2. 给子组件标签添加属性，值为 state 中的数据
3. 子组件中通过 props 接收父组件中传递的数据

父组件提供数据并且传递给子组件

```js
class Parent extends React.Component {
  state = { lastName: "王" };
  render() {
    return (
      <div>
        传递数据给子组件：
        <Child name={this.state.lastName} />
      </div>
    );
  }
}
```

子组件接收数据

```js
function Child(props) {
  return <div>子组件接收到数据：{props.name}</div>;
}
```

### 子传父

思路：利用回调函数，父组件提供回调，子组件调用，将要传递的数据作为回调函数的参数。

1. 父组件提供一个回调函数（用于接收数据）
2. 将该函数作为属性的值，传递给子组件
3. 子组件通过 props 调用回调函数
4. 将子组件的数据作为参数传递给回调函数

父组件提供函数并且传递给字符串

```js
class Parent extends React.Component {
  getChildMsg = (msg) => {
    console.log("接收到子组件数据", msg);
  };
  render() {
    return (
      <div>
        子组件：
        <Child getMsg={this.getChildMsg} />
      </div>
    );
  }
}
```

子组件接收函数并且调用

```js
class Child extends React.Component {
    state = { childMsg: 'React' }
    handleClick = () => {
    	this.props.getMsg(this.state.childMsg)
    }
    return (
    	<button onClick={this.handleClick}>点我，给父组件传递数据</button>
    )
}
```

**注意：回调函数中 this 指向问题！**

### 兄弟组件

- 将共享状态提升到最近的公共父组件中，由公共父组件管理这个状态
- 思想：**状态提升**
- 公共父组件职责：
  - 提供共享状态
  - 提供操作共享状态的方法
- 要通讯的子组件只需通过 props 接收状态或操作状态的方法

状态提升前

![](images/状态提升01.png)

状态提升之后

![](images/状态提升02.png)

### context

- 调用 React. createContext() 创建 Provider（提供数据） 和 Consumer（消费数据） 两个组件。

```js
const { Provider, Consumer } = React.createContext();
```

- 使用 Provider 组件作为父节点。

```js
<Provider>
  <div className="App">
    <Child1 />
  </div>
</Provider>
```

- 设置 value 属性，表示要传递的数据。

```js
<Provider value="pink">
```

- 调用 Consumer 组件接收数据。

```js
<Consumer>{(data) => <span>data参数表示接收到的数据 -- {data}</span>}</Consumer>
```

总结：

1. 如果两个组件是远方亲戚（比如，嵌套多层）可以使用 Context 实现组件通讯
2. Context 提供了两个组件：Provider 和 Consumer
3. Provider 组件：用来提供数据
4. Consumer 组件：用来消费数据

## Props 高级

### children 属性

children 属性：表示该组件的子节点，只要组件有子节点，props 就有该属性

children 属性与普通的 props 一样，值可以是任意值（文本、React 元素、组件，甚至是函数）

```js
function Hello(props) {
  return <div>该组件的子节点：{props.children}</div>;
}

<Hello>我是子节点</Hello>;
```

### Props 校验

2. 导入 prop-types 包
3. 使用组件名.propTypes = {} 来给组件的 props 添加校验规则
4. 校验规则通过 PropTypes 对象来指定

```js
import PropTypes from "prop-types";
function App(props) {
  return <h1>Hi, {props.colors}</h1>;
}
App.propTypes = {
  // 约定colors属性为array类型
  // 如果类型不对，则报出明确错误，便于分析错误原因
  colors: PropTypes.array,
};
```

### 约束规则

1. 常见类型：array、bool、func、number、object、string
2. React 元素类型：element
3. 必填项：isRequired
4. 特定结构的对象：shape({})

```js
// 常见类型
optionalFunc: PropTypes.func,
// 必选
requiredFunc: PropTypes.func.isRequired,
// 特定结构的对象
optionalObjectWithShape: PropTypes.shape({
	color: PropTypes.string,
	fontSize: PropTypes.number
})
```

### Props 默认值

场景：分页组件 每页显示条数
作用：给 props 设置默认值，在未传入 props 时生效

```js
function App(props) {
  return <div>此处展示props的默认值：{props.pageSize}</div>;
}
// 设置默认值
App.defaultProps = {
  pageSize: 10,
};
// 不传入pageSize属性
<App />;
```

### 类的静态属性 static

- 实例成员: 通过实例调用的属性或者方法，，，叫做实例成员（属性或者方法）

- 静态成员：通过类或者构造函数本身才能访问的属性或者方法

```jsx
class Person {
   name = 'zs',
   static age = 18
   sayHi() {
       console.log('哈哈')
   }
   static goodBye() {
       console.log('byebye')
   }
}

const p = new Person()

console.log(p.name)
p.sayHi()

console.log(Person.age)
Person.goodBye()
```

## 组件生命周期

- 意义：组件的生命周期有助于理解组件的运行方式、完成更复杂的组件功能、分析组件错误原因等
- 组件的生命周期：组件从被创建到挂载到页面中运行，再到组件不用时卸载的过程
- 钩子函数的作用：为开发人员在不同阶段操作组件提供了时机。
- **只有 类组件 才有生命周期。**
  <http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/>

![](images/组件生命周期.png)

### 挂载阶段

执行时机：组件创建时（页面加载时）

执行顺序：

![](images/组件的执行顺序.png)

| 钩子 函数         | 触发时机                    | 作用                                       |
| ----------------- | --------------------------- | ------------------------------------------ |
| constructor       | 创建组件时，最先执行        | 1. 初始化 state 2. 创建 Ref 等             |
| render            | 每次组件渲染都会触发        | 渲染 UI（**注意： 不能调用 setState()** ） |
| componentDidMount | 组件挂载（完成 DOM 渲染）后 | 1. 发送网络请求 2.DOM 操作                 |

### 更新阶段

- 执行时机：1. setState() 2. forceUpdate() 3. 组件接收到新的 props
- 说明：以上三者任意一种变化，组件就会重新渲染
- 执行顺序

![](images/更新阶段.png)

| 钩子函数           | 触发时机                    | 作用                                                     |
| ------------------ | --------------------------- | -------------------------------------------------------- |
| render             | 每次组件渲染都会触发        | 渲染 UI（与 挂载阶段 是同一个 render）                   |
| componentDidUpdate | 组件更新（完成 DOM 渲染）后 | DOM 操作，可以获取到更新后的 DOM 内容，不要调用 setState |

### 卸载阶段

- 执行时机：组件从页面中消失

| 钩子函数             | 触发时机                 | 作用                               |
| -------------------- | ------------------------ | ---------------------------------- |
| componentWillUnmount | 组件卸载（从页面中消失） | 执行清理工作（比如：清理定时器等） |

## setState

### 修改状态

- 组件中的状态是可变的
- 语法`this.setState({要修改的数据})`
- 注意：不要直接修改 state 中的值，必须通过`this.setState()`方法进行修改
- `setState`的作用

  - 修改 state
  - 更新 UI

- 思想：数据驱动视图

```js
class App extends React.Component {
  state = {
    count: 1,
  };
  handleClick() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    return (
      <div>
        <p>次数: {this.state.count}</p>
        <button onClick={this.handleClick.bind(this)}>点我+1</button>
      </div>
    );
  }
}
```

- react 中核心理念：**状态不可变**
  - 不要直接修改 react 中 state 的值，而是提供新的值
  - 直接修改 react 中 state 的值，组件并不会更新

```jsx
state = {
  count: 0,
  list: [],
};
// 直接修改值的操作
this.state.count++;
this.state.list.push("a");

// 创建新的值的操作
this.setState({
  count: this.state.count + 1,
  list: [...this.state.list, "b"],
});
```

### 更新数据

- setState() 是异步更新数据的
- 注意：使用该语法时，后面的 setState() 不要依赖于前面的 setState()

```js
1. 当你调用 setState 的时候，React.js 并不会马上修改 state （为什么）
2. 而是把这个对象放到一个更新队列里面
3. 稍后才会从队列当中把新的状态提取出来合并到 state 当中，然后再触发组件更新。
```

- 可以多次调用 setState() ，只会触发一次重新渲染

```js
this.state = { count: 1 };
this.setState({
  count: this.state.count + 1,
});
console.log(this.state.count); // 1
```

在使用 React.js 的时候，并不需要担心多次进行 `setState` 会带来性能问题。

- 推荐：使用 `setState((preState) => {})` 语法

- 参数 preState: React.js 会把上一个 `setState` 的结果传入这个函数

```js
this.setState((preState) => {
  return {
    count: preState.count + 1,
  };
});
console.log(this.state.count); // 1
```

**这种语法依旧是异步的，但是 state 可以获取到最新的状态，适用于需要调用多次 setState**

### 第二个参数

- 场景：在状态更新（页面完成重新渲染）后立即执行某个操作
- 语法：`setState(updater[, callback])`

```js
this.setState(
  (state) => ({}),
  () => {
    console.log("这个回调函数会在状态更新后立即执行");
  }
);
```

```js
this.setState(
  (state, props) => {},
  () => {
    document.title = "更新state后的标题：" + this.state.count;
  }
);
```

### 组件更新

- setState() 的两个作用： 1. 修改 state 2. 更新组件（UI）
- 过程：父组件重新渲染时，也会重新渲染子组件。但只会渲染当前组件子树（当前组件及其所有子组件）

![](images/组件更新.png)

## 组件性能优化

### 减轻 state

- 减轻 state：只存储跟组件渲染相关的数据（比如：count / 列表数据 / loading 等）
- 注意：不用做渲染的数据不要放在 state 中，比如定时器 id 等
- 对于这种需要在多个方法中用到的数据，应该直接放在 this 中
  - this.xxx = 'bbb'
  - this.xxx

```js
class Hello extends Component {
    componentDidMount() {
        // timerId存储到this中，而不是state中
        this.timerId = setInterval(() => {}, 2000)
    }
    componentWillUnmount() {
    	clearInterval(this.timerId)
    }
    render() { … }
}
```

vue 中不要把和渲染无关的数据放到 data 中

### 避免不必要的重新渲染

- 组件更新机制：父组件更新会引起子组件也被更新，这种思路很清晰
- 问题：子组件没有任何变化时也会重新渲染 （接收到的 props 没有发生任何的改变）
- 如何避免不必要的重新渲染呢？
- 解决方式：使用钩子函数 `shouldComponentUpdate(nextProps, nextState)`

- 作用：通过返回值决定该组件是否重新渲染，返回 true 表示重新渲染，false 表示不重新渲染
- 触发时机：更新阶段的钩子函数，组件重新渲染前执行 （shouldComponentUpdate => render）

```js
class Hello extends Component {
    shouldComponentUpdate() {
        // 根据条件，决定是否重新渲染组件
        return false
    }
    render() {…}
}
```

### 纯组件

- 纯组件：`React.PureComponent` 与 `React.Component `功能相似
- 区别：PureComponent 内部自动实现了 shouldComponentUpdate 钩子，不需要手动比较
- 原理：纯组件内部通过分别 对比 前后两次 props 和 state 的值，来决定是否重新渲染组件

```js
class Hello extends React.PureComponent {
  render() {
    return <div>纯组件</div>;
  }
}
```

**只有在性能优化的时候可能会用到纯组件，不要所有的组件都使用纯组件，因为纯组件需要消耗性能进行对比**

### 纯组件比较-值类型

- 说明：纯组件内部的对比是 shallow compare（浅层对比）

- 对于值类型来说：比较两个值是否相同（直接赋值即可，没有坑）

```js
let number = 0;
let newNumber = number;
newNumber = 2;
console.log(number === newNumber); // false
```

```js
state = { number: 0 };
setState({
  number: Math.floor(Math.random() * 3),
});
// PureComponent内部对比：
最新的state.number === 上一次的state.number; // false，重新渲染组件
```

### 纯组件比较-引用类型

- 说明：纯组件内部的对比是 shallow compare（浅层对比）
- 对于引用类型来说：只比较对象的引用（地址）是否相同

```js
const obj = { number: 0 };
const newObj = obj;
newObj.number = 2;
console.log(newObj === obj); // true
```

```js
state = { obj: { number: 0 } };
// 错误做法
state.obj.number = 2;
setState({ obj: state.obj });
// PureComponent内部比较：
最新的state.obj === 上一次的state.obj; // true，不重新渲染组件
```

纯组件的最佳实践：

注意：state 或 props 中属性值为引用类型时，应该创建新数据，不要直接修改原数据！

```js
// 正确！创建新数据
const newObj = { ...state.obj, number: 2 };
setState({ obj: newObj });
// 正确！创建新数据
// 不要用数组的push / unshift 等直接修改当前数组的的方法
// 而应该用 concat 或 slice 等这些返回新数组的方法
this.setState({
  list: [...this.state.list, { 新数据 }],
});
```

## Router

### 使用步骤

```js
npm i react-router-dom
```

- `react-router-dom`这个包提供了三个核心的组件

```js
import { HashRouter, Route, Link } from "react-router-dom";
```

- 使用`HashRouter`包裹整个应用，一个项目中只会有一个 Router

```js
<Router>
  <div className="App">// … 省略页面内容</div>
</Router>
```

- 使用 Link 指定导航链接

```js
<Link to="/first">页面一</Link>
<Link to="/two">页面二</Link>
```

- 使用`Route`指定路由规则

```js
// 在哪里写的Route,最终匹配到的组件就会渲染到这
<Route path="/first" component={First}></Route>
```

- Router 组件：包裹整个应用，一个 React 应用只需要使用一次
- 两种常用 Router：`HashRouter` 和 `BrowserRouter`
- HashRouter：使用 URL 的哈希值实现（`localhost:3000/#/first`）

- BrowserRouter：使用 H5 的 history API 实现（`localhost:3000/first`）

```js
import { HashRouter as Router, Route, Link } from "react-router-dom";
```

### Link 与 NavLink

`Link`组件最终会渲染成 a 标签，用于指定路由导航

- to 属性，将来会渲染成 a 标签的 href 属性
- `Link`组件无法实现导航的高亮效果

`NavLink`组件，一个更特殊的`Link`组件，可以用用于指定当前导航高亮

- to 属性，用于指定地址，会渲染成 a 标签的 href 属性
- activeClass: 用于指定高亮的类名，默认`active`
- exact: 精确匹配，表示必须精确匹配类名才生效

### Route

- v6 开始必须被嵌套在`<Routes>`标签内
- 写法：
- ```js
  <Routes>
    <Route></Route>
    <Route></Route>
  </Routes>
  ```

- path 的说明
  - 默认情况下，/能够匹配任意/开始的路径
  - 如果 path 的路径匹配上了，那么就可以对应的组件就会被 render
  - 如果 path 没有匹配上，那么会 render null
  - 如果没有指定 path，那么一定会被渲染
- exact 的说明， exact 表示精确匹配某个路径
  - 一般来说，如果路径配置了 /， 都需要配置 exact 属性

### Switch 与 404

> v6 已经把 Switch 移除，改为 Routes
> v6 已经把 component 移除，改为 element，内容为组件标签

- 通常，我们会把`Route`包裹在一个`Switch`组件中

- 在`Switch`组件中，不管有多少个路由规则匹配到了，都只会渲染第一个匹配的组件
- 通过`Switch`组件非常容易的就能实现 404 错误页面的提示
- ```js
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/user" component={User} />
    <Route component={NoMatch} />
  </Switch>
  ```

- v6 写法:
- ```js
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/user" element={<User />} />
    <Route element={<NoMatch />} />
  </Routes>
  ```

### 编程式导航

> v6 类组件使用 hooks 代替

- 场景：点击登录按钮，登录成功后，通过代码跳转到后台首页，如何实现？
- 编程式导航：通过 JS 代码来实现页面跳转
- history 是 React 路由提供的，用于获取浏览器历史记录的相关信息
- push(path)：跳转到某个页面，参数 path 表示要跳转的路径
- go(n)： 前进或后退到某个页面，参数 n 表示前进或后退页面数量（比如：-1 表示后退到上一页）

```js
class Login extends Component {
    handleLogin = () => {
        // ...
        this.props.history.push('/home')
    }
    render() {...省略其他代码}
}
```

### 动态路由与路由参数获取

> v6 类组件使用 hooks 代替

- 可以使用`:id`的方式来配置动态的路由参数

```js
// 可以匹配 /users/1  /users/2  /users/xxx
<Route path="/users/:id" component={Users} />
```

- 在组件中，通过`props`可以接收到路由的参数

```js
render(){
    console.log(this.props.match.params)
}
```
