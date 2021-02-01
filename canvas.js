(function () {


    var canvas = document.getElementById("canvas");
    console.log(canvas);
    var ctx = canvas.getContext('2d');
    var w = canvas.width = innerWidth;
    var h = canvas.height = innerHeight;

    if (window.matchMedia("(max-width: 768px)").matches) {
        var pointCount = 40;
    } else {
        var pointCount = 100;
    }
    console.log(pointCount);

    var points = [];
    var speed = 5;
    var pointRadius = 3;

    window.onresize = function () {
        w = canvas.width = innerWidth;
        h = canvas.height = innerHeight;
    }

    class point {

        constructor() {
            this.x = Math.random() * w;
            this.y = Math.random() * h;
            this.dx = (Math.random() - 0.5) * speed;
            this.dy = (Math.random() - 0.5) * speed;
        }

        newPoint() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, pointRadius, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fillStyle = 'rgba(251, 151, 39, 0.4)';
            ctx.fill();
        }

        movePoint() {

            if (this.x + pointRadius > w || this.x - pointRadius < 0) {
                this.dx = -this.dx;
            }

            if (this.y + pointRadius > h || this.y - pointRadius < 0) {
                this.dy = -this.dy;
            }

            this.x += this.dx;
            this.y += this.dy;
        }
    }

    function drowPoints() {
        for (var i in points) {
            points[i].newPoint();
            points[i].movePoint();
        }
    }

    function line() {
        var x1, x2, y1, y2, distance, visibility;
        for (var i in points) {
            for (var j in points) {
                x1 = points[i].x;
                x2 = points[j].x;
                y1 = points[i].y;
                y2 = points[j].y;
                distance = Math.sqrt((Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)))
                if (distance < 100) {
                    visibility = 1 - distance / 100;
                    if (window.matchMedia("(max-width: 768px)").matches) {
                        ctx.lineWidth = '1';
                    } else {
                        ctx.lineWidth = '2';
                    }
                    // ctx.lineWidth = '1';
                    ctx.strokeStyle = 'rgba(0,0,0,' + visibility + ')';
                    ctx.beginPath();
                    ctx.moveTo(x1, y1);
                    ctx.lineTo(x2, y2);
                    ctx.closePath();
                    ctx.stroke();
                }
            }
        }

    }

    console.log(points);

    function loop() {
        ctx.clearRect(0, 0, w, h);
        drowPoints();
        line();
        requestAnimationFrame(loop);
    }

    function init() {
        for (var i = 0; i < pointCount; i++) {
            points.push(new point)
        }
        loop();
    }

    init();
}());