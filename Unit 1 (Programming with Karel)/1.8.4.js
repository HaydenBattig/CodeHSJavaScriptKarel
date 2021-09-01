function start(){
    yote();
    move();
    turnRight();
    moveThrice();
    turnLeft();
    yote();

    
}
/* Yote:
A function with the purpose of 
repeating movement to the right placing balls up for three spaces
moving up again and then turning right
*/
function yote(){
    move();
    turnLeft();
    putBall();
    move();
    putBall();
    move();
    putBall();
    move();
    turnRight();
    
}
//move three times
function moveThrice(){
    move();
    move();
    move();
}