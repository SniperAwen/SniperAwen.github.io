## arr 模块

| 方法       | 说明 | 参数  | 返回  |
| ---------- | ---- | ----- | ----- |
| `toRepeat` | 去重 | array | array |

## obj 模块

| 方法        | 说明   | 参数   | 返回   |
| ----------- | ------ | ------ | ------ |
| `deepClone` | 深克隆 | object | object |

## str 模块

| 方法       | 说明 | 参数   | 返回   |
| ---------- | ---- | ------ | ------ |
| `toRepeat` | 去重 | string | string |

## bro 模块

| 方法       | 说明               | 参数 | 返回                 |
| ---------- | ------------------ | ---- | -------------------- |
| `scroll`   | 获取浏览器滚动距离 | -    | {x:number,y:number}  |
| `viewPort` | 获取浏览器视口宽高 | -    | {x:number,y:number}  |
| `isMobile` | 判断是否移动端     | -    | boolean 或 undefinde |

## reg 模块

| 方法    | 说明 | 参数                  | 返回    |
| ------- | ---- | --------------------- | ------- |
| `check` | 校验 | type,string 或 number | boolean |

| type         | about                                                        |
| ------------ | ------------------------------------------------------------ |
| `mobile`     | 手机号码                                                     |
| `tel`        | 座机                                                         |
| `card`       | 身份证                                                       |
| `mobileCode` | 6 位数字验证码                                               |
| `pwd`        | 密码以字母开头，长度在 6~18 之间，只能包含字母、数字和下划线 |
| `payPwd`     | 支付密码 6 位纯数字                                          |
| `postal`     | 邮政编码                                                     |
| `QQ`         | QQ 号                                                        |
| `email`      | 邮箱                                                         |
| `money`      | 金额(小数点 2 位)                                            |
| `URL`        | 网址                                                         |
| `IP`         | IP                                                           |
| `date`       | 日期时间                                                     |
| `number`     | 数字                                                         |
| `english`    | 英文                                                         |
| `chinese`    | 中文                                                         |
| `lower`      | 小写                                                         |
| `upper`      | 大写                                                         |
| `HTML`       | HTML 标记                                                    |

## 防抖

| 方法       | 说明 | 参数             | 返回      |
| ---------- | ---- | ---------------- | --------- |
| `debounce` | 防抖 | function，number | undefinde |

## 节流

| 方法       | 说明 | 参数             | 返回      |
| ---------- | ---- | ---------------- | --------- |
| `throttle` | 防抖 | function，number | undefinde |

## 判断类型

| 方法   | 说明     | 参数 | 返回 |
| ------ | -------- | ---- | ---- |
| `type` | 判断类型 | data | type |

| return      | about      |
| ----------- | ---------- |
| `Array`     | 数组       |
| `String`    | 字符串     |
| `Object`    | 对象       |
| `Function`  | 函数       |
| `RegExp`    | 正则表达式 |
| `Null`      | 空         |
| `Undefined` | 未定义     |
| `Boolean`   | 布尔值     |

## 打开新页面

| 方法   | 说明       | 参数                    | 返回        |
| ------ | ---------- | ----------------------- | ----------- |
| `open` | 打开新页面 | string，array 或 object | window.open |

| 类型   | 参数                                    | 地址                            |
| ------ | --------------------------------------- | ------------------------------- |
| array  | `"www.ylawen.com/awen",["a","111",333]` | `www.ylawen.com/awen/a/111/333` |
| object | `"www.ylawen.com/awen",{a:"1",b:"10"}`  | `www.ylawen.com/awen?a=1&b=10`  |
