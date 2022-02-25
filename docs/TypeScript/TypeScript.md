# TypeScript

> TypeScript 是 JavaScript 类型的超集，它可以编译成纯 JavaScript。
> TypeScript 可以在任何浏览器、任何计算机和任何操作系统上运行，并且是开源的。

# 基本使用

- 安装

  ```
  npm i -g typescript
  ```

- 编译

  ```
  tsc xxx.js
  ```

- 执行
  ```
  npm i -g ts-node
  ts-node xxx.ts
  ```

# 类型注解

```typescript
let age: number = 18;
// 错误代码：
// 错误原因：将 string 类型的值赋值给了 number 类型的变量，类型不一致
let age: number = "18";
```

# 类型推论

```ts
// 变量 age 的类型被自动推断为：number
let age = 18;

// 函数返回值的类型被自动推断为：number
function add(num1: number, num2: number) {
  return num1 + num2;
}
```

# 基础类型

1. JS 已有类型

- 原始类型：`number/string/boolean/null/undefined/symbol`
- 对象类型：`object`（包括，数组、对象、函数等对象）

2. TS 新增类型

- 联合类型、自定义类型(类型别名)、接口、元组、字面量类型、枚举、void、any 等

- 注意：
  1. *原始类型*在 TS 和 JS 中写法一致
  2. *对象类型*在 TS 中更加细化，每个具体的对象（比如，数组、对象、函数）都有自己的类型语法

## 原始类型

- 原始类型：number/string/boolean/null/undefined/symbol
- 特点：简单，这些类型，完全按照 JS 中类型的名称来书写

```ts
let age: number = 18;
let myName: string = "老师";
let isLoading: boolean = false;

// 等等...
```

## 数组类型

- 数组类型的两种写法：

```ts
// 写法一：
let numbers: number[] = [1, 3, 5];
// 写法二：
let strings: Array<string> = ["a", "b", "c"];
```

## 联合类型

```ts
let arr: (number | string)[] = [1, "a", 3, "b"];
```

- 解释：`|`（竖线）在 TS 中叫做**联合类型**，即：由两个或多个其他类型组成的类型，表示可以是这些类型中的任意一种

## 类型别名

```ts
type CustomArray = (number | string)[];

let arr1: CustomArray = [1, "a", 3, "b"];
let arr2: CustomArray = ["x", "y", 6, 7];
```

- 解释:
  1. 使用 `type` 关键字来创建自定义类型
  2. 类型别名（比如，此处的 _CustomArray_）可以是任意合法的变量名称
  3. 推荐使用大写字母开头
  4. 创建类型别名后，直接使用该类型别名作为变量的类型注解即可

## 函数类型

```ts
// 函数声明
function add(num1: number, num2: number): number {
  return num1 + num2;
}

// 箭头函数
const add = (num1: number, num2: number): number => {
  return num1 + num2;
};
```

2. 同时指定参数、返回值的类型:

```ts
type AddFn = (num1: number, num2: number) => number;

const add: AddFn = (num1, num2) => {
  return num1 + num2;
};
```

### void 类型

- 如果函数没有返回值，那么，函数返回值类型为：`void`

```ts
function greet(name: string): void {
  console.log("Hello", name);
}
```

- 注意：
  - 如果一个函数没有返回值，此时，在 TS 的类型中，应该使用 `void` 类型

```ts
// 如果什么都不写，此时，add 函数的返回值类型为： void
const add = () => {};
// 这种写法是明确指定函数返回值类型为 void，与上面不指定返回值类型相同
const add = (): void => {};

// 但，如果指定 返回值类型为 undefined，此时，函数体中必须显示的 return undefined 才可以
const add = (): undefined => {
  // 此处，返回的 undefined 是 JS 中的一个值
  return undefined;
};
```

### 可选参数

```ts
function mySlice(start?: number, end?: number): void {
  console.log("起始索引：", start, "结束索引：", end);
}
```

- 可选参数：在可传可不传的参数名称后面添加 `?`（问号）
- 注意：**可选参数只能出现在参数列表的最后**，也就是说可选参数后面不能再出现必选参数

## 对象类型

```ts
// 空对象
let person: {} = {};

// 有属性的对象
let person: { name: string } = {
  name: "同学",
};

// 既有属性又有方法的对象
// 在一行代码中指定对象的多个属性类型时，使用 `;`（分号）来分隔
let person: { name: string; sayHi(): void } = {
  name: "jack",
  sayHi() {},
};

// 对象中如果有多个类型，可以换行写：
// 通过换行来分隔多个属性类型，可以去掉 `;`
let person: {
  name: string;
  sayHi(): void;
} = {
  name: "jack",
  sayHi() {},
};
```

- 解释:
  1. 使用 `{}` 来描述对象结构
  2. 属性采用`属性名: 类型`的形式
  3. 方法采用`方法名(): 返回值类型`的形式

### 类型别名

```ts
// 创建类型别名
type Person = {
  name: string;
  sayHi(): void;
};

// 使用类型别名作为对象的类型：
let person: Person = {
  name: "jack",
  sayHi() {},
};
```

### 带有参数的方法类型

- 如果方法有参数，就在方法名后面的小括号中指定参数类型

```ts
type Person = {
  greet(name: string): void;
};

let person: Person = {
  greet(name) {
    console.log(name);
  },
};
```

- 方法的类型也可以使用箭头函数形式

```ts
type Person = {
  greet: (name: string) => void;
};

let person: Person = {
  greet(name) {
    console.log(name);
  },
};
```

### 可选属性

```ts
type Config = {
  url: string;
  method?: string;
};

function myAxios(config: Config) {
  console.log(config);
}
```

## 接口

- 解释：
  1. 使用 `interface` 关键字来声明接口
  2. 接口名称(比如，此处的 IPerson)，可以是任意合法的变量名称，推荐以 `I` 开头
  3. 声明接口后，直接使用接口名称作为变量的类型
  4. 因为每一行只有一个属性类型，因此，属性类型后没有 ;(分号)

```ts
interface IPerson {
  name: string;
  age: number;
  sayHi(): void;
}

let person: IPerson = {
  name: "jack",
  age: 19,
  sayHi() {},
};
```

### interface vs type

- interface（接口）和 type（类型别名）的对比：
- 相同点：都可以给对象指定类型
- 不同点:
  - 接口，只能为对象指定类型
  - 类型别名，不仅可以为对象指定类型，实际上可以为任意类型指定别名
- 推荐：**能使用 type 就是用 type**

```ts
interface IPerson {
  name: string;
  age: number;
  sayHi(): void;
}

// 为对象类型创建类型别名
type IPerson = {
  name: string;
  age: number;
  sayHi(): void;
};

// 为联合类型创建类型别名
type NumStr = number | string;
```

### 接口继承

```ts
interface Point2D {
  x: number;
  y: number;
}
interface Point3D {
  x: number;
  y: number;
  z: number;
}
```

- 更好的方式:

```ts
interface Point2D {
  x: number;
  y: number;
}
// 继承 Point2D
interface Point3D extends Point2D {
  z: number;
}
```

- 解释：
  1. 使用 `extends`(继承)关键字实现了接口 Point3D 继承 Point2D
  2. 继承后，Point3D 就有了 Point2D 的所有属性和方法(此时，Point3D 同时有 x、y、z 三个属性)

## 元组

```ts
let position: number[] = [116.2317, 39.5427];
```

- 使用 number[] 的缺点：不严谨，因为该类型的数组中可以出现任意多个数字
- 更好的方式：`元组 Tuple`
- 元组类型是另一种类型的数组，它确切地知道包含多少个元素，**以及特定索引对应的类型**

```ts
let position: [number, number] = [39.5427, 116.2317];
```

- 解释：
  1. 元组类型可以确切地标记出有多少个元素，以及每个元素的类型
  2. 该示例中，元素有两个元素，每个元素的类型都是 number

## 字面量类型

```ts
let str1 = "Hello TS";
const str2 = "Hello TS";
```

- 通过 TS 类型推论机制，可以得到答案：

  1. 变量 str1 的类型为：string
  2. 变量 str2 的类型为：'Hello TS'

- 解释:

1. str1 是一个变量(let)，它的值可以是任意字符串，所以类型为:string
2. str2 是一个常量(const)，它的值不能变化只能是 'Hello TS'，所以，它的类型为:'Hello TS'

- 注意：此处的 'Hello TS'，就是一个**字面量类型**，也就是说某个特定的字符串也可以作为 TS 中的类型
- 任意的 JS 字面量（比如，对象、数字等）都可以作为类型使用
  - 字面量：`{ name: 'jack' }` `[]` `18` `20` `'abc'` `false` `function() {}`

## 枚举类型

```ts
// 创建枚举
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

// 使用枚举类型
function changeDirection(direction: Direction) {
  console.log(direction);
}

// 调用函数时，需要应该传入：枚举 Direction 成员的任意一个
// 类似于 JS 中的对象，直接通过 点（.）语法 访问枚举的成员
changeDirection(Direction.Up);
```

- 解释:
  1. 使用 `enum` 关键字定义枚举
  2. 约定枚举名称以大写字母开头
  3. 枚举中的多个值之间通过 `,`（逗号）分隔
  4. 定义好枚举后，直接使用枚举名称作为类型注解

```ts
// Down -> 11、Left -> 12、Right -> 13
enum Direction {
  Up = 10,
  Down,
  Left,
  Right,
}

enum Direction {
  Up = 2,
  Down = 4,
  Left = 8,
  Right = 16,
}
```

```ts
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
```

> 枚举原理

```ts
// 会被编译为以下 JS 代码：
var Direction;

(function (Direction) {
  Direction['Up'] = 'UP'
  Direction['Down'] = 'DOWN'
  Direction['Left'] = 'LEFT'
  Direction['Right'] = 'RIGHT'
})(Direction || Direction = {})
```

## any 类型

```ts
let obj: any = { x: 0 };

obj.bar = 100;
obj();
const n: number = obj;
```

- 解释:以上操作都不会有任何类型错误提示，即使可能存在错误
- 尽可能的避免使用 any 类型，除非临时使用 any 来“避免”书写很长、很复杂的类型
- 其他隐式具有 any 类型的情况
  1. 声明变量不提供类型也不提供默认值
  2. 函数参数不加类型
- 注意：因为不推荐使用 any，所以，这两种情况下都应该提供类型

# 高级类型

## 泛型

```ts
function id<Type>(value: Type): Type {
  return value;
}

function id<T>(value: T): T {
  return value;
}
const num = id<number>(10);
const str = id<string>("a");
```

- 解释:
  1. 语法：在函数名称的后面添加 `<>`(尖括号)，**尖括号中添加类型变量**，比如此处的 Type
  2. **类型变量 Type，是一种特殊类型的变量，它处理类型而不是值**
  3. **该类型变量相当于一个类型容器**，能够捕获用户提供的类型(具体是什么类型由用户调用该函数时指定)
  4. 因为 Type 是类型，因此可以将其作为函数参数和返回值的类型，表示参数和返回值具有相同的类型
  5. 类型变量 Type，可以是任意合法的变量名称

```ts
function getProp<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}
let person = { name: "jack", age: 18 };
getProp(person, "name");
```

- 解释:
  1. 添加了第二个类型变量 Key，两个类型变量之间使用 `,` 逗号分隔。
  2. **keyof 关键字接收一个对象类型，生成其键名称(可能是字符串或数字)的联合类型**。
  3. 本示例中 `keyof Type` 实际上获取的是 person 对象所有键的联合类型，也就是：`'name' | 'age'`
  4. 类型变量 Key 受 Type 约束，可以理解为：Key 只能是 Type 所有键中的任意一个，或者说只能访问对象中存在的属性

### 泛型接口

```ts
interface IdFunc<Type> {
  id: (value: Type) => Type;
  ids: () => Type[];
}

let obj: IdFunc<number> = {
  id(value) {
    return value;
  },
  ids() {
    return [1, 3, 5];
  },
};
```

- 解释:
  1. 在接口名称的后面添加 `<类型变量>`，那么，这个接口就变成了泛型接口。
  2. 接口的类型变量，对接口中所有其他成员可见，也就是**接口中所有成员都可以使用类型变量**。
  3. 使用泛型接口时，**需要显式指定具体的类型**(比如，此处的 IdFunc<nunber>)。
  4. 此时，id 方法的参数和返回值类型都是 number;ids 方法的返回值类型是 number[]。

### Partial

- Partial<Type> 用来构造(创建)一个类型，将 Type 的所有属性设置为可选。

```ts
type Props = {
  id: string;
  children: number[];
};

type PartialProps = Partial<Props>;
```

- 解释:构造出来的新类型 PartialProps 结构和 Props 相同，但所有属性都变为可选的。

### Readonly

- Readonly<Type> 用来构造一个类型，将 Type 的所有属性都设置为 readonly(只读)。

```ts
type Props = {
  id: string;
  children: number[];
};

type ReadonlyProps = Readonly<Props>;
```

- 解释:构造出来的新类型 ReadonlyProps 结构和 Props 相同，但所有属性都变为只读的。

```ts
let props: ReadonlyProps = { id: "1", children: [] };
// 错误演示
props.id = "2";
```

- 当我们想重新给 id 属性赋值时，就会报错:无法分配到 "id" ，因为它是只读属性。

### Pick

- Pick<Type, Keys> 从 Type 中选择一组属性来构造新类型。

```ts
interface Props {
  id: string;
  title: string;
  children: number[];
}
type PickProps = Pick<Props, "id" | "title">;
```

- 解释:
  1. Pick 工具类型有两个类型变量:1 表示选择谁的属性 2 表示选择哪几个属性。 2. 其中第二个类型变量，如果只选择一个则只传入该属性名即可。
  2. 第二个类型变量传入的属性只能是第一个类型变量中存在的属性。
  3. 构造出来的新类型 PickProps，只有 id 和 title 两个属性类型。

## 索引签名类型

```ts
interface AnyObject {
  [key: string]: number;
}
let obj: AnyObject = {
  a: 1,
  b: 2,
};
```

- 解释:
  1. 使用 `[key: string]` 来约束该接口中允许出现的属性名称。表示只要是 string 类型的属性名称，都可以出现在对象中。
  2. 这样，对象 obj 中就可以出现任意多个属性(比如，a、b 等)。
  3. `key 只是一个占位符`，可以换成任意合法的变量名称。
  4. 隐藏的前置知识:`JS 中对象({})的键是 string 类型的`。

```ts
interface MyArray<T> {
  [n: number]: T;
}
let arr: MyArray<number> = [1, 3, 5];
```

- 解释:
  1. MyArray 接口模拟原生的数组接口，并使用 `[n: number]` 来作为索引签名类型。
  2. 该索引签名类型表示:只要是 number 类型的键(索引)都可以出现在数组中，或者说数组中可以有任意多个元素。
  3. 同时也符合数组索引是 number 类型这一前提。

## 映射类型

```ts
type PropKeys = "x" | "y" | "z";
type Type1 = { x: number; y: number; z: number };
```

- 这样书写没错，但 x/y/z 重复书写了两次。像这种情况，就可以使用映射类型来进行简化。

```ts
type PropKeys = "x" | "y" | "z";
type Type2 = { [Key in PropKeys]: number };
```

- 解释:
  1. 映射类型是基于索引签名类型的，所以，该语法类似于索引签名类型，也使用了 []。
  2. `Key in PropKeys` 表示 Key 可以是 PropKeys 联合类型中的任意一个，类似于 forin(let k in obj)。
  3. 使用映射类型创建的新对象类型 Type2 和类型 Type1 结构完全相同。
  4. 注意:**映射类型只能在类型别名中使用，不能在接口中使用**。

# 类型断言

```ts
const aLink = document.getElementById("link") as HTMLAnchorElement;
```

- 解释:

  1. 使用 `as` 关键字实现类型断言
  2. 关键字 as 后面的类型是一个更加具体的类型（HTMLAnchorElement 是 HTMLElement 的子类型）
  3. 通过类型断言，aLink 的类型变得更加具体，这样就可以访问 a 标签特有的属性或方法了

- 另一种语法，使用 `<>` 语法，这种语法形式不常用知道即可:

```ts
// 该语法，知道即可：
const aLink = <HTMLAnchorElement>document.getElementById("link");
```

_技巧：在浏览器控制台，通过 `__proto__` 获取 DOM 元素的类型_

# typeof

```ts
let p = { x: 1, y: 2 };
function formatPoint(point: { x: number; y: number }) {}
formatPoint(p);

function formatPoint(point: typeof p) {}
```

- 解释:
  1. 使用 `typeof` 操作符来获取变量 p 的类型，结果与第一种（对象字面量形式的类型）相同
  2. typeof 出现在**类型注解的位置（参数名称的冒号后面）所处的环境就在类型上下文**(区别于 JS 代码)
  3. 注意：typeof 只能用来查询变量或属性的类型，无法查询其他形式的类型（比如，函数调用的类型）

# 类型声明文件

- TS 中有两种文件类型：1 `.ts` 文件 2 `.d.ts` 文件
- .ts 文件:
  1. `既包含类型信息又可执行代码`
  2. 可以被编译为 .js 文件，然后，执行代码
  3. 用途：编写程序代码的地方
- .d.ts 文件:

  1. `只包含类型信息`的类型声明文件
  2. **不会生成 .js 文件，仅用于提供类型信息**
  3. 用途：为 JS 提供类型信息

- 总结：.ts 是 `implementation`(代码实现文件)；**.d.ts 是 declaration(类型声明文件)**
- 如果要为 JS 库提供类型信息，要使用 `.d.ts` 文件

# tsconfig

- [tsconfig 文档链接](https://www.typescriptlang.org/tsconfig)

```json
{
  // 编译选项
  "compilerOptions": {
    // 生成代码的语言版本：将我们写的 TS 代码编译成哪个版本的 JS 代码
    // 命令行： tsc --target es5 11-测试TS配置文件.ts
    "target": "es5",
    // 指定要包含在编译中的 library
    "lib": ["dom", "dom.iterable", "esnext"],
    // 允许 ts 编译器编译 js 文件
    "allowJs": true,
    // 跳过类型声明文件的类型检查
    "skipLibCheck": true,
    // es 模块 互操作，屏蔽 ESModule 和 CommonJS 之间的差异
    "esModuleInterop": true,
    // 允许通过 import x from 'y' 即使模块没有显式指定 default 导出
    "allowSyntheticDefaultImports": true,
    // 开启严格模式
    "strict": true,
    // 对文件名称强制区分大小写
    "forceConsistentCasingInFileNames": true,
    // 为 switch 语句启用错误报告
    "noFallthroughCasesInSwitch": true,
    // 生成代码的模块化标准
    "module": "esnext",
    // 模块解析（查找）策略
    "moduleResolution": "node",
    // 允许导入扩展名为.json的模块
    "resolveJsonModule": true,
    // 是否将没有 import/export 的文件视为旧（全局而非模块化）脚本文件
    "isolatedModules": true,
    // 编译时不生成任何文件（只进行类型检查）
    "noEmit": true,
    // 指定将 JSX 编译成什么形式
    "jsx": "react-jsx"
  },
  // 指定允许 ts 处理的目录
  "include": ["src"]
}
```
