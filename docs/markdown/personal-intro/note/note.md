我是 note 专区


## pnpm的接入



### 使用pnpm安装依赖后node_modules包的结构

- .pnmp为虚拟存储目录，该目录通过<package-name>@<version>来实现相同模块不同版本之间隔离和复用，由于它只会根据项目中的依赖生成，并不存在提升，所以它不会存在之前提到的Phantom dependencies问题！通过Store + Links来实现

#### Store
pnpm 使用名为 .pnpm-store的 store dir，Mac/linux中默认会设置到{home dir}>/.pnpm-store/v3；windows下会设置到当前盘的根目录下，比如C（C/.pnpm-store/v3）、D盘（D/.pnpm-store/v3）。

![avatar](/images/note/1682526563293.jpg)
可以在不同的磁盘上设置同一个存储，但在这种情况下，pnpm 将复制包而不是硬链接它们，因为硬链接只能发生在同一文件系统同一分区上


如果某个依赖在 sotre 目录中存在了话，那么就会直接从 store 目录里面去 hard-link，避免了二次安装带来的时间消耗，如果依赖在 store 目录里面不存在的话，就会去下载一次。

## pnpm踩坑记录

- 