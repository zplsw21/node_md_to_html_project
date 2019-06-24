src 文件夹为工程本体

  index.js 为工程代码（使用者无需查看，需要添加工程则自行修改）
  template.html 为html模板，约定在第一个body标签中加入md生成的html片段
  index.md 为需要转化为html片段的md文件

dist 文件夹为输出html的文件夹，里面的index.html即为转化后的html

使用方法:
1. npm i 或者 yarn
2. 设置好index.md和template.html
3. npm run start 或者 yarn start