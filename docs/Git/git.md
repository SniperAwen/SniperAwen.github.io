## 版本控制

![alt](./images/1.png)
![alt](./images/2.png)
![alt](./images/3.png)

### 版本控制系统的分类

![alt](./images/4.png)
![alt](./images/5.png)
![alt](./images/6.png)
![alt](./images/7.png)

## Git 概念

- Git 是一个开源的分布式版本控制系统，是目前世界上最先进、最流行的版本控制系统。可以快速高效地处理从很小到非常大的项目版本管理。
- 特点：项目越大越复杂，协同开发者越多，越能体现出 Git 的高性能和高可用性！

### Git 的特性

- Git 之所以快速和高效，主要依赖于它的如下两个特性：
  - 直接记录快照，而非差异比较
  - 近乎所有操作都是本地执行

### SVN 的差异比较

![alt](images/8.png)

### Git 的记录快照

![alt](images/9.png)

### 近乎所有操作都是本地执行

![alt](images/10.png)

### Git 中的三个区域

![alt](images/11.png)

### Git 中的三种状态

![alt](images/12.png)

### 基本的 Git 工作流程

![alt](images/13.png)

## 安装并配置 Git

![alt](images/14.png)
![alt](images/15.png)
![alt](images/16.png)
![alt](images/17.png)
![alt](images/18.png)

## Git 的基本操作

### 获取 Git 仓库的两种方式

> 将尚未进行版本控制的本地目录转换为 Git 仓库
> 从其它服务器克隆一个已存在的 Git 仓库

- 以上两种方式都能够在自己的电脑上得到一个可用的 Git 仓库

### 在现有目录中初始化仓库

- 如果自己有一个尚未进行版本控制的项目目录，想要用 Git 来控制它，需要执行如下两个步骤：

  - 在项目目录中，通过鼠标右键打开“Git Bash”
  - 执行 git init 命令将当前的目录转化为 Git 仓库

- git init 命令会创建一个名为 .git 的隐藏目录，这个 .git 目录就是当前项目的 Git 仓库，里面包含了初始的必要
  文件，这些文件是 Git 仓库的必要组成部分。

### 工作区中文件的 4 种状态

![alt](images/19.png)

### 以精简的方式显示文件状态

![alt](images/20.png)

### 跟踪新文件

![alt](images/21.png)

### 提交更新

![alt](images/22.png)
![alt](images/23.png)

### 对已提交的文件进行修改

![alt](images/24.png)

### 暂存已修改的文件

![alt](images/25.png)

### 提交已暂存的文件

![alt](images/26.png)

### 撤销对文件的修改

![alt](images/27.png)

### 向暂存区中一次性添加多个文件

![alt](images/28.png)

### 取消暂存的文件

![alt](images/29.png)

### 跳过使用暂存区域

![alt](images/30.png)

### 移除文件

![alt](images/31.png)

### 忽略文件

![alt](images/32.png)

### glob 模式

![alt](images/33.png)

### .gitignore 文件

![alt](images/34.png)

### 查看提交历史

![alt](images/35.png)

### 回退到指定的版本

![alt](images/36.png)

### Git 操作小结

- 初始化 Git 仓库的命令
  - git init
- 查看文件状态的命令
  - git status 或 git status -s
- 一次性将文件加入暂存区的命令
  - git add .
- 将暂存区的文件提交到 Git 仓库的命令
  - git commit -m "提交消息"
