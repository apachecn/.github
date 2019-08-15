$(document).ready(function(){
  counterNumberChanger()
})

function counterNumberChanger () {
  const counter = $('.counter')
  if (counter.length) {
    counter.appear(function () {
      counter.countTo()
    })
  }
}