## local 模块

| 方法     | 说明             | 参数        | 返回                |
| -------- | ---------------- | ----------- | ------------------- |
| `get`    | 获取本地存储     | string      | data 或 "" 或 error |
| `set`    | 设置本地存储     | string，any | undefined 或 error  |
| `remove` | 移除本地存储     | string      | undefined 或 error  |
| `clear`  | 清除所有本地存储 | 无          | undefined 或 error  |

## session 模块

| 方法     | 说明             | 参数        | 返回                |
| -------- | ---------------- | ----------- | ------------------- |
| `get`    | 获取本地存储     | string      | data 或 "" 或 error |
| `set`    | 设置本地存储     | string，any | undefined 或 error  |
| `remove` | 移除本地存储     | string      | undefined 或 error  |
| `clear`  | 清除所有本地存储 | 无          | undefined 或 error  |

## cookie 模块

| 方法     | 说明        | 参数                      | 返回                    |
| -------- | ----------- | ------------------------- | ----------------------- |
| `get`    | 获取 cookie | string                    | data 或 "" 或 undefined |
| `set`    | 设置 cookie | string，any，string(可选) | undefined 或 error      |
| `remove` | 移除 cookie | string                    | undefined 或 error      |
