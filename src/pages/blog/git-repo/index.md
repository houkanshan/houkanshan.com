---
title: Local Git Repo
date: 2012-04-16
---

很多人难免不得已用了两个系统，就像我这种什么都会点又什么都不会的类型。Windows上要做图、写Doc、调IE，反正多数是些非正业的事情，Linux上写代码。但是切换很麻烦，所有经常就顺便在Win上写了。本来是可以直接把代码放在Win的NTFS分区上两个系统都可以访问的，但是上次因为操作系统休眠的问题丢了代码([跟这个同学情况类似](http://xiaoxia.org/2011/07/29/linuxwindows-dual-system-of-sleep-function-almost-put-the-files-on-the-ntfs-lost))
，就决定在两个系统上分别放代码了。

一个同步的办法是用github，但是最近感觉开发中的代码最好还是不要没事就push一下，容易刷屏。但是要同步又必须是即时的，于是觉得应该可以直接在本地push/pull。

git可以很方便的在本地push/pull而不需要daemon进程，直接git init --bare就可以了。但这样创建的版本库只有.git目录，没有工作时的代码(working dir)。在上面用通常的方法做push/pull一类操作都会提示“This operation must be run in a work tree”

开始是觉得一个git库因该是可以同时做Server和Client的，也就是在linux上往windows上的库直接push,尝试之后发现不行，因为在Client所有的push和pull都是主动的操作，Server都是被动接受的，同时一个Client是不应该有被动的行为的，所以也就是不能同时有两个角色。

虽然可以通过一些很不正常的方法让server也获得代码并临时变成client再往远程push。但毕竟很丑陋。。。

在NTFS上为了同步再加个repository，init为bare。在本地先push到这里，在有必要的时候再push到github上。

![示意图](/img/git-repo.png '示意图')

虽然有时候需要push两次，但是我觉得对于我这种情况，这的确是必要的步骤。

git真灵活～赞美。。。

-----------------

又改了点样式，我表示这个主题是不是太烂了点啊。。。
