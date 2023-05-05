(function(){
    var cnzzId = window.$docsify.cnzzId
    var unRepo = window.$docsify.repo || ''
    var [un, repo] = unRepo.split('/')
    var icp = ''
        if (location.host.includes('apachecn.org')) {
            icp = '京ICP备15026725号-2'
        } else if (location.host.includes('ibooker.org.cn')) {
            icp = '京ICP备2020035452号-1'
    }
    var icpText = icp? `<p>ICP许可证号: <a href="http://beian.miit.gov.cn" target="_blank">${icp}</a></p>`: ''
    var footer = `
      <hr/>
      <div align="center">
        <p><a href="http://www.apachecn.org/" target="_blank"><font face="KaiTi" size="6" color="red">我们一直在努力</font></a><p>
        <p><a href="https://github.com/${unRepo}" target="_blank">${unRepo}</a></p>
        <p><a target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=2oFEp1KHbDCP0Te4Wt-I6FOK4hvg4iBk&jump_from=webapi&authKey=dw08LmD1w9km55TSmcW2J4gjeaiyn7KTff+8bnqiIeDweqrzQF2ccsE/hQswWQk7"><img border="0" src="//pub.idqqimg.com/wpa/images/group.png" alt="iBooker 面试求职" title="iBooker 面试求职"></a></p>
        <p><span id="cnzz_stat_icon_${cnzzId}"></span></p>
        ${icpText}
        <!-- <p><a href="https://get.brightdata.com/apachecn" target="_blank"><img src="{{ '/assets/images/partnerstack.gif' | url }}" /></a><p> -->
        <div style="text-align:center;margin:0 0 10.5px;">
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3565452474788507" crossorigin="anonymous"></script>
          <!-- ApacheCNWide -->
          <ins class="adsbygoogle"
              style="display:inline-block;width:680px;height:90px"
              data-ad-client="ca-pub-3565452474788507"
              data-ad-slot="2543897000"></ins>
          <script>
              (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
        </div>
      </div>
      <hr/>
      <!-- 来必力City版安装代码 -->
      <div id="lv-container" data-id="city" data-uid="MTAyMC81ODA2NC8zNDUyNw==">
        <script type="text/javascript">
        (function(d, s) {
            var j, e = d.getElementsByTagName(s)[0];
      
            if (typeof LivereTower === 'function') { return; }
      
            j = d.createElement(s);
            j.src = 'https://cdn-city.livere.com/js/embed.dist.js';
            j.async = true;
      
            e.parentNode.insertBefore(j, e);
        })(document, 'script');
        </script>
      <noscript> 为正常使用来必力评论功能请激活JavaScript</noscript>
      </div>
      <!-- City版安装代码已完成 -->
      </div>
      <hr/>
    `
    var plugin = function(hook) {
      hook.afterEach(function(html) {
        return html + footer
      })
      hook.doneEach(function() {
        (adsbygoogle = window.adsbygoogle || []).push({})
        new Gitalk(window.$docsify.gitalk)
            .render(window.$docsify.gitalk.container)
      })
    }
    var plugins = window.$docsify.plugins || []
    plugins.push(plugin)
    window.$docsify.plugins = plugins
})()
