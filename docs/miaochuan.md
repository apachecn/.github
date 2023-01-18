# [网盘工具/百度网盘]秒传链接的使用以及常见问题解答 -2022版油猴网页脚本

> 来源：<https://www.bilibili.com/read/cv17317007>

前言：本文被收录在文集[https://www.bilibili.com/read/readlist/rl322957](https://www.bilibili.com/read/readlist/rl322957)中，转载请勿乱改，转载严禁用于商业用途，作者不对任何转载版本负责。 

注：此项技术仅针对百度网盘有效

软件要求：Chrome或Firefox等支持tampermonkey、Violentmonkey的浏览器。

1、什么是秒传链接？

度盘秒传链接(标准提取码)由128位(32个16进制数)+#+128位(32个16进制数)+#+一段数字+#+文件名的形式组成。

如同

47D112C767B8C69654023864897FDC3A#BF65AC1063E511DAB0C5E24EB03C3FDB#1373350#wife\_generator.apk

的形式

·在这一串码中两个32位带字母的十六进制数是文件特征码之类的东西，原理类似于MD5码。

·后一串十进制数字1373350意义不明，还没完全弄明白，推测与文件大小有关。

·文件名wife\_generator.apk即是存储在百度网盘内的文件名，完全一致。

  

从上面可以看出，标准提取码与存储文件的文件内容、文件大小以及文件名有关

理论上存储在百度网盘内的一个文件只有一个对应的标准提取码，也就是说，即使有一百万个用户通过分享或上传等各种方式存储了同一个文件(即拥有相同的标准提取码)，这个文件实际上在百度云中也只存储了一份。

![](//i0.hdslb.com/bfs/article/4aa545dccf7de8d4a93c2b2b8e3265ac0a26d216.png@progressive.webp)

2、使用秒传链接进行文件传输的好处

(1)账户安全：不需要分享者与分享链接就可以直接分享文件，且链接中只包含文件信息，并不包含任何账号信息，能够确保保存/上传文件时的账号安全。

(2)链接永不失效，且在文件被和谐的概率变低：即使分享者将源文件在他的网盘内删除，也可以通过秒传链接保存文件。原因是该文件已经存储在百度云服务器内，分享者删除的只是分享者自己操作该文件的“权限”，并不影响“真正有权限”的用户(如百度服务器等)访问该文件的权限。 

虽说如此，如果原文件已被和谐的话还是无法用普通链接分享或下载，且如果要保证链接有效，必须保证该文件一定在任意账号里上传过一次。

![](//i0.hdslb.com/bfs/article/4aa545dccf7de8d4a93c2b2b8e3265ac0a26d216.png@progressive.webp)

3、如何安装秒传链接插件

第一步：安装tampermonkey(或Violentmonkey)插件

方法一(需要能访问谷歌商店)：

![](//i0.hdslb.com/bfs/article/dcf7abe52a0c79844cbb363f609fe8d7a5d6ac8d.png@1256w_674h_progressive.webp)

然后点击右上角的“添加至Chrome”，等到添加成功后，按钮会变成“从Chrome中删除”。

  

方法二(不需要访问谷歌商店)：

准备好油猴适应Chrome的扩展包“tampermonkey.crx”，点开chrome右上角菜单栏，选择“更多工具→扩展工具”。在开启右上角“开发者模式”的选项后，点击“加载已解压的扩展程序”。

![](//i0.hdslb.com/bfs/article/a375be309e914f89ebdb081f6190780ab5c308a5.png@1256w_588h_progressive.webp)

之后将之前准备好的tampermonkey.crx加载即可，加载完毕后可能会有报错，如果能正常使用油猴脚本的话直接无视就好。

![](//i0.hdslb.com/bfs/article/4aa545dccf7de8d4a93c2b2b8e3265ac0a26d216.png@progressive.webp)

第二步：安装秒传插件

来到greasyfork脚本网站，找到“秒传链接提取”的页面，点击“安装此脚本”。

![](https://i0.hdslb.com/bfs/article/29dcd059e6cffd8b45e09ded8e0b141bc07ec761.png@1256w_674h_progressive.webp)

https://greasyfork.org/zh-CN/scripts/424574-%E7%A7%92%E4%BC%A0%E9%93%BE%E6%8E%A5%E6%8F%90%E5%8F%96  

点击过后耐心等待一段时间，安装成功后会显示“重新安装X.X.X版本”。

![](//i0.hdslb.com/bfs/article/4aa545dccf7de8d4a93c2b2b8e3265ac0a26d216.png@progressive.webp)

4、使用秒传链接

(1)：如何利用秒传代码保存文件

如果上述步骤都成功之后，打开我们的百度网盘主页https://pan.baidu.com/disk/main#/index?category=all，登录账号，之后会发现上方菜单栏的右边多了两个“秒传”和“生成秒传”的按钮。

![](//i0.hdslb.com/bfs/article/f310e5cb7c2f2e8bd1c44429e394dd7ce534e840.png@1256w_88h_progressive.webp)

点击“秒传”按钮，输入秒传代码，输入相应的网盘保存路径(如果路径为空，则默认保存在当前目录)，再点击确定。

![](//i0.hdslb.com/bfs/article/35ead764f3a15b3f3c5a7b06128bc0ecc715a7ae.png@1256w_930h_progressive.webp)

之后会显示此次保存的结果。

![](//i0.hdslb.com/bfs/article/983f977cd75b619a7c53ca82b94424e15e7043d3.png@1256w_756h_progressive.webp)

如果生成失败的话，请记录下报错面板的错误码(理论上，错误码有可能会随着脚本版本的更新而有所变动)，去到脚本作者提供的常见问题解答页面查看方法。

![](//i0.hdslb.com/bfs/article/4aa545dccf7de8d4a93c2b2b8e3265ac0a26d216.png@progressive.webp)

(2)如何生成秒传代码

将要生成秒传代码的文件打上“√”，然后点击按钮“生成秒传”，之后会显示生成结果。

![](//i0.hdslb.com/bfs/article/411dfc3746f82517d55a89d25401587f913c6a33.png@1256w_1086h_progressive.webp)

成功后，就可以把秒传代码分享给别人啦~(别人使用时，也需要油猴的直链脚本正常使用)

再多嘴两句，讲一下“复制一键秒传”和“复制秒传代码”的区别：

复制一键秒传：生成的是带有“https://pan.baidu.com/#bdlink=” + 秒传提取码的网址，可以直接把生成的该网址复制进浏览器的地址栏里，输入后网页会自动帮你打开秒传面板，然后帮你把标准码复制进框里，只需要自己输入保存路径和点击"确定"按钮。

复制秒传代码：生成的是秒传提取码，需要手动点开秒传面板，然后把这串提取码复制进面板里，之后输入保存路径和点击“确定”按钮。

![](//i0.hdslb.com/bfs/article/4aa545dccf7de8d4a93c2b2b8e3265ac0a26d216.png@progressive.webp)

注：

(1)如果“生成秒传”一直失败，可以参考作者提供的解决方法：在上传文件后，再用脚本作者提供的本地生成工具(https://wwe.lanzoui.com/b01u0yqvi 提取码2233)生成标准提取码。

(2)直链工具只是提供了一个类似于加密的传输渠道，能保证文件更安全、更直接地传输和保存文件，除此之外，并没有任何别的功能。

![](//i0.hdslb.com/bfs/article/4aa545dccf7de8d4a93c2b2b8e3265ac0a26d216.png@progressive.webp)

常见问题：

(1)Q：转存结果页面失败，报错误码\*\*\*。

A：请去脚本发布页作者提供的文档查看错误码的解决方法。

(2)Q：转存路径如何填写

A：不填写就是默认当前打开的文件目录页面，如果想保存到特定文件夹下，输入从根目录开始的路径，如根目录下有个temp文件夹，我想存到里面，那么在保存路径中输入/temp/即可，转存成功后有一个跳转到目录的选项。如果不记得路径了且手滑把转存页面关掉了也没关系，记住文件名，然后用百度网盘自带的搜索功能找到该文件。

(3)Q：秒传只能转存文件，有没有什么办法更好地下载文件？

A：有，同样是在https://greasyfork.org/zh-CN/scripts这个脚本网站，打开主页你应该就能看到那个脚本，安装量最多的那个应该就是，脚本作者也提供了十分详细的教程。

![](//i0.hdslb.com/bfs/article/4aa545dccf7de8d4a93c2b2b8e3265ac0a26d216.png@progressive.webp)

以上就是这版的全部内容了，如果看了文章和常见问题后还有疑问无法解决，欢迎评论区提问或者私信(私信时请注意你的账号状态，最近有很多小伙伴给我的私信都被放到了“疑似不良消息”里，导致我收不到提示)，都会尽量解答。
