var cvs = document.getElementById("cvs");
cvs.width = document.body.clientWidth;
cvs.height = document.body.clientHeight;

function distance(p1, p2) {
  var dx = p1.x - p2.x;
  var dy = p1.y - p2.y;
  return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
}

function createAnimation(cvs, velocity, circlesNumber, lineDistance) {
  if (velocity === void 0) {
    velocity = 0.2;
  }
  if (circlesNumber === void 0) {
    circlesNumber = 20;
  }
  if (lineDistance === void 0) {
    lineDistance = 250;
  }
  var globalAnimationID;
  var innerAnimationID;
  var state = [];
  var ctx = cvs.getContext("2d");

  function initState() {
    for (var i = 0; i < circlesNumber; i++) {
      var x = Math.floor(Math.random() * cvs.width);
      var y = Math.floor(Math.random() * cvs.height);
      var radius = Math.floor(Math.random() * 3) + 2;
      var xdirection = Math.random() > 0.5 ? 1 : -1;
      var ydirection = Math.random() > 0.5 ? 1 : -1;
      state = state.concat([{
        x: x,
        y: y,
        radius: radius,
        xdirection: xdirection,
        ydirection: ydirection
      }]);
    }
  }
  initState();

  function nextState() {
    state = state.map(function (circle) {
      var nextX = circle.x + circle.xdirection * velocity;
      var nextY = circle.y + circle.ydirection * velocity;
      var nextXdirection = circle.xdirection;
      var nextYdirection = circle.ydirection;
      if (nextX > cvs.width - circle.radius || nextX < circle.radius) {
        nextXdirection = -nextXdirection;
      }
      if (nextY > cvs.height - circle.radius || nextY < circle.radius) {
        nextYdirection = -nextYdirection;
      }
      return {
        radius: circle.radius,
        x: nextX,
        xdirection: nextXdirection,
        y: nextY,
        ydirection: nextYdirection
      };
    });
  }

  function clearCanvas() {
    ctx.clearRect(0, 0, cvs.width, cvs.height);
  }

  function drawCircle() {
    ctx.fillStyle = "#85adfc";
    state.forEach(function (circle) {
      ctx.beginPath();
      ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, true);
      ctx.fill();
    });
  }

  function drawLine() {
    for (var i = 0; i < state.length - 1; i++) {
      for (var j = i + 1; j < state.length; j++) {
        var d = distance(state[i], state[j]);
        if (d < lineDistance) {
          ctx.strokeStyle = "rgba(133, 173, 252, " + (1 - d / lineDistance) + ")";
          ctx.beginPath();
          var startPoint = state[i];
          var endPoint = state[j];
          ctx.moveTo(startPoint.x, startPoint.y);
          ctx.lineTo(endPoint.x, endPoint.y);
          ctx.stroke();
        }
      }
    }
  }

  function drawOneFrame() {
    clearCanvas();
    drawCircle();
    drawLine();
    nextState();
    innerAnimationID = requestAnimationFrame(drawOneFrame);
  }

  function start() {
    globalAnimationID = requestAnimationFrame(drawOneFrame);
  }

  function stop() {
    cancelAnimationFrame(innerAnimationID);
    cancelAnimationFrame(globalAnimationID);
  }
  return {
    start: start,
    stop: stop
  };
}
var anim = createAnimation(cvs, 0.5);
anim.start();
