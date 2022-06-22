<h1>目前还在Alpha阶段，谨慎使用！</h1>

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
<!DOCTYPE html>
<html lang="en">
	<head>
		<script src="./awen.min.css"></script>
		<script src="./awen.js"></script>
	</head>
	<body>
		<script>
			awen.local.get('awen')
		</script>
	</body>
</html>
```

### Vue

<h6>main.js</h6>

```javascript
import "awen/Awen.min.css";
import * as awen from "awen";
Vue.prototype.$awen = awen;
```

<h6>组件内</h6>

```vue
<template></template>
<script>
export default {
  mounted() {
    this.$awen.local.get("awen");
  },
};
</script>
```

### React

<h6>组件内</h6>

```jsx
import React from "react";
import "awen/Awen.min.css";
import * as awen from "awen";

export default function Awen() {
  return <div>{awen.local.get("awen")}</div>;
}
```
