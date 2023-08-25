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