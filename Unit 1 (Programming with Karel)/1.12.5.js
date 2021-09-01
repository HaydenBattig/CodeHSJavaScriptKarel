/* Write a program to lay a row of tennis balls
 * across first street. Make sure to test your
 * program on multiple worlds. */
function start(){
    while(frontIsClear()){
        putBall();
        move();
        
    }
    if (frontIsBlocked()){
        putBall();
    }
	/* Your code goes here! */
}