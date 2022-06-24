## local 模块

| 方法     | 说明             | 参数        | 返回                |
| -------- | ---------------- | ----------- | ------------------- |
| `get`    | 获取本地存储     | string      | data 或 "" 或 error |
| `set`    | 设置本地存储     | string，any | undefined 或 error  |
| `remove` | 移除本地存储     | string      | undefined 或 error  |
| `clear`  | 清除所有本地存储 | 无          | undefined 或 error  |

## router 模块

| 方法     | 说明             | 参数                 | 返回          |
| -------- | ---------------- | -------------------- | ------------- |
| `go`     | 路由跳转         | string，object(可选) | complete info |
| `reGo`   | 路由重定向       | string，object(可选) | complete info |
| `back`   | 路由返回         | number               | complete info |
| `tabBar` | 切换 tabBar 页面 | string，object(可选) | complete info |
