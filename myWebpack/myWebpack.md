# 我的webpack
+ 参考文章
  + https://zhuanlan.zhihu.com/p/58151131
  + https://segmentfault.com/a/1190000012840742 plugin
  + https://www.jianshu.com/p/077e173d847e
+ 依赖包
  + npm install @babel/parser --save 把依赖模块编译成ast
  + npm install @babel/traverse --save ast遍历工具
  + npm install @bable/core --save 通过ast生成code
  + npm install @babel/preset-env 做es6语法转es5的快捷方法
  + npm install tapable 实现plugin的核心模块
+ 主要思路
  + run 函数读取 webapck配置依赖
  + build 函数读取模块文件生成ast，并通过babel相关工具反解析依赖路径，最后生成boundle的依赖图谱
  + 构建require调用和moudle.export方法，实现commonjs在浏览器中运行。
  + loader实现关键在于getSouce方法中执行会掉，把当前文件内容传入
  + plugin实现关键基于tapable的事件流机制，将各个插件串联起来


