## 开源协议

- 开源并不意味着完全没有限制，为了限制使用者的使用范围和保护作者的权利，每个开源项目都应该遵守开源许可协议（ Open Source License ）：

  - ① BSD（Berkeley Software Distribution）
  - ② Apache Licence 2.0
  - ③ GPL（GNU General Public License）
    - 具有传染性的一种开源协议，不允许修改后和衍生的代码做为闭源的商业软件发布和销售
    - 使用 GPL 的最著名的软件项目是：Linux
  - ④ LGPL（GNU Lesser General Public License）
  - ⑤ MIT（Massachusetts Institute of Technology, MIT） - 是目前限制最少的协议，唯一的条件：在修改后的代码或者发行包中，必须包含原作者的许可信息 - 使用 MIT 的软件项目有：jquery、Node.js

## 安装并配置

- 下载 Git
  - `https://git-scm.com/`
- 配置用户信息
  - `git config --global user.name "Awen"`
  - `git config --global user.email "2889984509@qq.com"`
  - 配置信息写入在 `C:/Users/用户/.gitconfig`
- 查看用户配置
  - `git config --list --global`
- 配置 SSH Key
  - Git Bash 中输入`ssh-keygen -t rsa -b 4096 -C "2889984509@qq.com"`
  - 三次回车后在 `C:\User\用户\.ssh` 目录中生成 `id_rsa` 和 `id_rsa.pub` 文件
  - 将 `id_rsa.pub` 文件内容复制到 `Github->Setting->SSH and GPG Keys->New SSH Key->Key`
- 检测 SSH Key 配置
  - `ssh -T git@github.com`

## 常用命令

| 说明      | 命令                               |
| --------- | ---------------------------------- |
| 初始化    | `git init `                        |
| 克隆仓库  | `git clone 地址`                   |
| 文件状态  | `git status` <br> `git status -s`  |
| 暂存文件  | `git add . ` <br> `git add 文件名` |
| 提交更新  | `git commit -m "消息"`             |
| 推送更新  | `git push`                         |
| `-------` | `--------------------------`       |
| 查看分支  | `git branch`                       |
| 创建分支  | `git branch 分支名称`              |
| 切换分支  | `git checkout 分支名称`            |
| 创建切换  | `git checkout -b 分支名称`         |
| 分支推送  | `git push -u origin 分支名称`      |
| 合并分支  | `git merge 分支名称`               |
| 删除分支  | `git branch -d 分支名称`           |
| 拉取分支  | `git pull`                         |
| `-------` | `--------------------------`       |
| 取消暂存  | `git reset HEAD 文件名`            |
| 撤销修改  | `git checkout -- 文件名 `          |
| 提交历史  | `git log`                          |
| 回退版本  | `git reset --hard <提交的ID>`      |

## .gitignore

- 格式规范
  - `#`开头-->注释
  - `/`结尾-->目录
  - `/`开头-->防止递归
  - `!`开头-->取反
  - `#`开头-->注释
- glob 模式
  - `*`-->匹配零个或多个任意字符
  - `[abc]`-->匹配一个在方括号中的字符
  - `?`-->匹配一个任意字符
  - `**`-->匹配任意中间目录
