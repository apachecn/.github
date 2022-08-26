# ApacheCN 翻译、校对、笔记整理活动

## InventWithPython 第一部分【校对】【千字两元】

仓库：https://github.com/apachecn/invent-with-python-zh

整体进度：https://github.com/apachecn/invent-with-python-zh/issues/1

贡献指南：https://github.com/apachecn/invent-with-python-zh/blob/master/CONTRIBUTING.md

认领：0/42，完成：0/42

## Impatient JavaScript【校对】【千字两元】

贡献指南：https://github.com/apachecn/impatient-js-zh/blob/master/CONTRIBUTING.md

整体进度：https://github.com/apachecn/impatient-js-zh/issues/1

项目仓库：https://github.com/apachecn/impatient-js-zh

认领：33/42，完成：33/42

## UIUC CS241 系统编程中文讲义【校对】【千字两元】

仓库：https://github.com/apachecn/uiuc-cs241-notes-zh

整体进度：https://github.com/apachecn/uiuc-cs241-notes-zh/issues/1

贡献指南：https://github.com/apachecn/uiuc-cs241-notes-zh/blob/master/CONTRIBUTING.md

认领：18/78，完成：8/78

## OpenSUSE Leap 15.3 系统分析与调整指南【校对】【千字两元】


贡献指南：https://github.com/apachecn/opensuse-leap153-sysanal-tune-guide/blob/master/CONTRIBUTING.md

整体进度：https://github.com/apachecn/opensuse-leap153-sysanal-tune-guide/issues/1

项目仓库：https://github.com/apachecn/opensuse-leap153-sysanal-tune-guide

认领：15/20，完成：10/20

---

## 有用的链接

+   [ApacheCN 文档导航](https://docs.apachecn.org/)
+   [谷歌翻译](https://translate.google.cn/)
+   [ApacheCN 校对活动参与手册](https://github.com/apachecn/home/blob/master/docs/translate/joining-guide.md)
+   [译后编辑](https://www.bing.com/search?q=%E8%AF%91%E5%90%8E%E7%BC%96%E8%BE%91&mkt=zh-CN)
+   [当翻译竟然变成了文本编辑——李笑来](https://zhuanlan.zhihu.com/p/465979584)
+   [翻译引擎易错术语列表（欢迎补充）](https://github.com/apachecn/home/blob/master/docs/translate/trans-table.md)
+   [廖雪峰 Git 教程](https://www.liaoxuefeng.com/wiki/896043488029600)

## Markdown 排版要求

1.  代码块和图片无需校对，并且不计入字数。
3.  汉字和英文字母，汉字和数字之间空一格。但是中文标点和任何字符之间都不用空格。
4.  粗体斜体和链接要求同上，中文和英文粗体，英文和中文粗体之间也需要空格。
5.  任何编程语言中出现的东西，比如变量名，类名，函数名，包名，以及命令行中出现的东西，比如命令，文件名，路径，扩展名，都需要包在内联代码中。内联代码与汉字/标点之间无需空格，但和英文字母或数字之间空一格。
6.  表格的格式容易乱，保证它们显示正常。
7.  标题和较短的列表需要特别校对。
8.  有少量未翻译的段落，使用[谷歌翻译](https://translate.google.cn/)之后再校对。

## 有用的正则表达式

链接：

```
(?<!!)\[[^\]]*\]
```

表格：

```
^\|
```

中文间空格：

中文间空格一般是翻译引擎出错的地方。

```
[\u4e00-\u9fff]\s+[\u4e00-\u9fff]
```

未翻译段落：

```
^[a-zA-Z0-9][^\u4e00-\u9fff]+$
^\s*([\+\-\*]\x20{3}|\d+\.\x20{2})[^\u4e00-\u9fff]+$
```

内联代码：

在 Markdown 中，内联代码需要用反引号括起来，但一些教程并没有这样做。于是，需要检查中英文边界，将没有用反引号括起来的内联代码改掉。

```
[\u2018-\u201d\u3001-\u301c\u4e00-\u9fff\uff01-\uff65]\x20*[A-Za-z0-9]|[A-Za-z0-9]\x20*[\u2018-\u201d\u3001-\u301c\u4e00-\u9fff\uff01-\uff65]
```

粗体/斜体：

```
\*\*[^\*]+\*\*|(?<!\*)\*[^\*]+\*(?!\*)
```

标题：

```
^#+\x20
```

列表（二十字以内）：

短的列表由于没有上下文非常容易出错。

```
^\s*([\+\-\*]\x20{3}|\d+\.\x20{2}).{1,20}$
```

## 奖励

校对者在完工后可以领取千字2~4元的奖励（视难度和工作量而定），请联系飞龙（Q562826179，V:wizardforcel）。

字数统计遵循 word 标准：每一个汉字和标点算一个字，一个连续的英文字母、数字和标点序列算一个字
