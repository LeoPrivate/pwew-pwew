function update()
{
    var delta = clock.getDelta(); // seconds.
    var moveDistance = 50 * delta; // 200 pixels per second
    var rotateAngle = Math.PI / 2 * delta * 2;   // pi/2 radians (90 degrees) per second

    if (keyboard.pressed("left"))
        player1.turnLeft(rotateAngle);
    if (keyboard.pressed("right"))
        player1.turnRight(- rotateAngle);
    if (keyboard.pressed("up"))
        player1.accelerate(moveDistance);
    if (keyboard.pressed("down"))
        player1.decelerate(moveDistance);

        var x = player2.graphic.position.x + WIDTH / 2;
        var y = player2.graphic.position.y + HEIGHT / 2;
    
    if (y > HEIGHT) {
        player2.turnLeft(Math.PI / 4);
    }
    if (y < 0) {
        player2.turnRight(Math.PI / 4);
    }
    if (x > WIDTH ) {
        player2.turnRight(90);
    }
    if (x < 0 ) {
        player2.turnLeft(Math.PI / 4);
    }
    player2.accelerate(moveDistance);
    player1.move();
    player2.move();
    controls.update();
}

function enemyDeplacement(){
    var x = player2.graphic.position.x + WIDTH / 2;
    var y = player2.graphic.position.y + HEIGHT / 2;

    if ( x > WIDTH )
    {
        player2.turnRight( rotateAngle);
    }
    /*if ( x < 0 )
        player1.graphic.position.x -= x;
    if ( y < 0 )
        player1.graphic.position.y -= y;
    if ( y > HEIGHT )
        player1.graphic.position.y -= y - HEIGHT;*/
    else {
    player2.accelerate(moveDistance);
    }
}