## 文档

> https://www.ylawen.com/awen.js
>
> 文档暂停更新（太忙了一堆破事）

## 安装

### 安装最新版

```
npm install awen
```

### 安装特定版本

```
npm install awen@版本号
```

## 使用

### HTML

```HTML
	<link rel="stylesheet" href="./awen.min.css">
	<script src="./awen.js"></script>
```

### Vue2

<h6>main.js</h6>

```javascript
import "awen/awen.min.css";
import auni from "awen/uni";
import autils from "awen/utils";
import aweb from "awen/web";
Vue.prototype.$auni = auni;
Vue.prototype.$autils = autils;
Vue.prototype.$aweb = aweb;
```

<h6>组件内</h6>

```vue
<template></template>
<script>
export default {
  mounted() {
    this.$auni.local.get("awen");
  },
};
</script>
```

### Vue3

<h6>main.ts</h6>

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import autil from "awen/autil";

const app = createApp(App);

app.config.globalProperties.$autil = autil;

app.use(router).mount("#app");
```

<h6>组件内</h6>

```vue
<template></template>

<script setup lang="ts">
import { getCurrentInstance } from "vue";
const _this = getCurrentInstance();
const $autil = _this?.appContext.config.globalProperties.$autil;
</script>
```

### React

<h6>组件内</h6>

```jsx
import React from "react";
import "awen/awen.min.css";
import auni from "awen/uni";
import autils from "awen/utils";
import aweb from "awen/web";

export default function Awen() {
  return <div>{auni.local.get("awen")}</div>;
}
```
