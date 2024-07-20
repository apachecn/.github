/*
 * This JavaScript doesn't do anything. The file exists just to demonstrate
 * including static assets from the HTML in themes.
 */

// 定义函数显示弹窗
function openPopup(imageSrc) {
  // 获取弹窗元素和图片元素
  var popupContainer = document.getElementById("popupContainer");
  var popupImage = document.getElementById("popupImage");
  
  // 设置图片路径并显示弹窗
  popupImage.src = imageSrc;
  popupContainer.style.display = "block";
}

function closePopup() {
  // 隐藏弹窗
  var popupContainer = document.getElementById("popupContainer");
  popupContainer.style.display = "none";
}


function loadAd(adContainerId, adUrl) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', adUrl, true);
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
          var adContainer = document.getElementById(adContainerId);
          if (adContainer) {
              adContainer.innerHTML = xhr.responseText;

              // 重新加载广告脚本
              var scripts = adContainer.getElementsByTagName('script');
              for (var i = 0; i < scripts.length; i++) {
                  var script = document.createElement('script');
                  if (scripts[i].src) {
                      script.src = scripts[i].src;
                  } else {
                      script.textContent = scripts[i].innerText;
                  }
                  document.head.appendChild(script);
              }

              // 动态加载本地脚本
              var localScript = document.createElement('script');
              localScript.src = 'js/marquee.js';
              document.head.appendChild(localScript);

              // 设置年份
              const currentYear = new Date().getFullYear();
              var yearElement = adContainer.querySelector('#year');
              if (yearElement) {
                  yearElement.textContent = currentYear;
              }
          }
      }
  };
  xhr.send();
}

document.addEventListener('DOMContentLoaded', function () {
    loadAd('coo_WideScreen_banner', 'https://data.dafeiyang.cn/coo/coo_WideScreen_banner.html');
    // loadAd('coo_NarrowScreen', 'https://data.dafeiyang.cn/coo/coo_NarrowScreen.html');
    // loadAd('coo_AutoScreen_300_100', 'https://data.dafeiyang.cn/coo/coo_AutoScreen_300_100.html');
    // loadAd('coo_AutoScreen', 'https://data.dafeiyang.cn/coo/coo_AutoScreen.html');
    // 如果有更多广告，可以继续调用 loadAd 函数加载其他广告

    // Function to get the current year
    const currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = currentYear;
});
