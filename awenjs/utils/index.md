## 使用

> 全部引入 `import * as au from "awen/utils";`

> 单独引入 `import { 模块 } from "awen/utils";`

## **getType** 获取数据类型

```ts
/**
 * 获取数据类型
 * @param { any } data
 * @returns string (首字母大写)
 */
export declare function getType(data: any): string;
```

## **check** 正则校验数据

```ts
/**
 * 正则校验数据
 * @param {string} type
 * @param {number||string} str
 * @returns boolean
 * type:
 * mobile 手机号
 * tel 座机
 * card 身份证
 * mobileCode 6位数字验证码
 * pwd 密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
 * payPwd 6位纯数字
 * postal 邮政编码
 * QQ QQ号
 * email 邮箱
 * money 金额(小数点2位)
 * URL 网址
 * IP IP
 * date 日期时间
 * number 数字
 * english 英文
 * chinese 中文
 * lower 小写
 * upper 大写
 * HTML HTML标记
 */
export declare function check(type: string, str: string | number): boolean;
```

## **toFromData** object 转 formdata

```ts
/**
 * object转formdata
 * @param {object} data 对象
 * @returns formdata
 */
```

## **debounce** 函数防抖

```ts
/**
 * 函数防抖
 * @param {function} func 目标函数
 * @param {number?} wait  延迟执行毫秒数 默认500
 * @returns
 */
```

## **throttle** 函数节流

```ts
/**
 * 函数节流
 * @param {function} func 函数
 * @param {number?} wait 延迟执行毫秒数默认500
 * @returns
 */
```

## **deepClone** 深克隆

```ts
/**
 * 深克隆
 * @param {any} data 数据
 * @param {new WeakMap()} map 默认为new WeakMap()
 * @returns new data
 */
```

## **deepClone** 深克隆

```ts
/**
 * 深克隆
 * @param {any} data 数据
 * @param {new WeakMap()} map 默认为new WeakMap()
 * @returns new data
 */
```
