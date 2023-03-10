## 使用

> 全部引入 `import * as ar from "awen/router";`

> 单独引入 `import { 模块 } from "awen/router";`

## **open** 打开新页面

```ts
/**
 * 打开新页面
 * @param {string} path
 * @param {array||object} data
 * @returns router
 */
export declare function open(path: string, data?: Object | Array<string | number>): void;
```

## **go** 跳转页面

```ts
/**
 * 跳转页面
 * @param {string} path
 * @param {array||object} data
 */
export declare function go(path: string, data?: Object | Array<string | number>): void;
```

## **getParamsObj** 获取 url 参数对象

```ts
/**
 * 获取url参数对象
 * @param {string} url
 * @returns object
 */
export declare function getParamsObj(url: string): Object;
```

## **getParamsStr** 获取 url 参数字符串

```ts
/**
 * 获取url参数字符串
 * @param {string} url
 * @returns string
 */
export declare function getParamsStr(url: string): string;
```

## **getPath** 获取 url path 字符串

```ts
/**
 * 获取urlpath字符串
 * @param {string} url
 * @returns string
 */
export declare function getPath(url: string): string;
```

## **toParamsStr** 对象转路径 params

```ts
/**
 * 对象转路径params
 * @param {object} data
 * @returns string
 */
export declare function toParamsStr(data: object): string;
```

## **changeUrlQuery** 更改网址参数

```ts
/**
 * 更改网址参数
 * @param {object} data
 */
export declare function changeUrlQuery(data: object): void;
```
