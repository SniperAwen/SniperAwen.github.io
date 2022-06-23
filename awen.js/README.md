## 文档

https://www.ylawen.com/awen.js

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

### Vue

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
