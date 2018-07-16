window.addEventListener('load', function () {

    var O = document.getElementById('obj'),
        X = 0,
        Y = 0,mouseX=0,mouseY=0;
    window.addEventListener('mousemove', function (ev) {
        ev = window.event || ev; 
        X=ev.pageX;
        Y=ev.pageY;

    });

    function move() { 
        var p = 'px';
        O.style.left = X + p;
        O.style.top = Y + p;

        setTimeout(move, 100);
    }
    move();

});