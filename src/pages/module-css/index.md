---
title: CSS Modularization
date: 2012-08-19
---

我今天要草率的把我的一些关于css的草率的想法和实践草率的写出来，所以就叫猜。


我之前一直苦于我的css代码基本就是样式堆砌的丑陋代码。即使是分了reset, common, page也无济于事。


less可以一定程度上避免代码的堆砌，因为它可以样式规则的嵌套。
但是样式规则嵌套不能过深，否则会导致选择器性能问题。


增加逻辑层次是一个合理放置代码的解决办法，比如模块。当然模块的初衷显然不是为了解决css代码混乱的，
模块化的好处除了增加代码可读性外，更重要的是它具有可重用的能力。其实也算是代码规范的功劳了，
其实代码规范好的话，可以解决很多问题。我甚至觉得架构这个东西，就应该是用代码规范来解决的。。。


基于less的css规范，我自己的实践原则是这样的，很简单：

#### 纵向上是

    模块1(名字空间) {  /* 比如 .speak-dialog */
        类1;         /* 比如 h1,h2,h3 {} */
        类2;         /* 比如 .hd {} */
    }

模块从全局空间开始，按照html树的层级，下面可能就到aside,main这级，然后再细化到内部的模块。到不能再细分模块的时候就以传统的css写法写。
这种模块+类在html结构上应该象是这样：

![css module](https://docs.google.com/drawings/pub?id=1rg7vzagk78_arYcCxHUtzPCPwOOAiFJBiz7Wc_cM1XQ&w=457&h=263)

#### 横向上是

    [{layout, style}, {layout, style}, ...]

layout包含会影响模块定位的属性，包括size,margin,border,float,position,padding,line-height,display等
(padding需要注意，因为当设置了width/height时，也padding会影响占位，所以虽然padding的语义是控制内容空间，但还是要放在布局的级别上)。
这些应该是对应render中的layout阶段的。

style则是剩下的元素显示效果，对应render中的paint阶段。

#### 所以大体的顺序应该是：

1. 全局名字空间的layout(nav,footer,header,section,main,aside,h1,h2,h3,h4等等的布局样式)
2. 全局名字空间的style(nav,footer,header,section,main,aside,h1,h2,h3,h4等等的效果样式)
3. aside,main,nav,header,footer等模块的layout
4. aside,main,nav,header,footer等模块的style
5. aside内模块的layout
6. aside内模块的style

...

对于一些模块间共用的样式，可以单独抽离出来成为独立的模块放到全局环境中去

乍看这样可能会写出很多重复的选择器，就比如layout和style或许没必要分这么开。但个人的实践中，layout和style的选择器的重复部分似乎并不大，
比如.a模块中设置了h1的layout，并不意味着就也要设置它的style，因为它已经继承了全局的设置了，所以单独再样式集内分离layout，style意义不大，还是需要在整体代码上分离开来。

而且layout与style也是独立的，基本上写css都是先layout再style这个先繁后简的流程。



    
### 关于css的其他想法

#### 通用原子类？

http://book.douban.com/people/houkanshan/annotation/4881987/

其实也看到一些同学这样做了。

我是比较反对通过直接在html上加具有样式意义的class来修改html的样式的，尤其是在css预处理器出现之后。
这些工作完全可以在预处理阶段完成。说是开发上快速，其实没有什么区别。在html模板上修改样式会很爽么？

更重要的就是破坏内容样式分离，有优先级被覆盖的问题，弄乱了html，也弄乱了css。

即使是为了javascript处理交互效果时方便加class，也不应该这样做。最容易出现优先级的问题。
而且，既然做selected的时候用的是给selected单独css，为什么在设置浮动的时候又要用base里面的东西而不能直接多写一点样式呢？
而且写在css里面就可以让人知道这个元素将来可能的表现了。



### 嗯

一个做过前端的妹子某次问我最近再做什么，然后问我写css不无聊么。

这真不好回答，其实我还想写点css，虽然最后编译出来的东西都是那么一坨。。。

以上，请指责。
