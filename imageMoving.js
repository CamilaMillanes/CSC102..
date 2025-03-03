// track the interval id
var intervalId = 0;
// this function will move the image around
function moveImage(){
    // cant click on start button since it was just clicked
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;

    // create shortcut variable that points to our HTML
    var image = document.getElementById("memeImage");

    // will keep track of where image was
    var oldX = 0;
    var oldY = 0;
    // this will allow us to stop moving the image
    intervalId = setInterval(function(){
        // set the x and y coordinates for image
        // keep the numbers small. these moves the image by pixels
        var newX = 5;
        var newY = 5;

        // 
        oldX += newX;
        oldY += newY;

        console.log("oldx = " + oldX);
        console.log("oldY = " + oldY);

        image.style.left = oldX + "px";
        image.style.top = oldY + "px";

     }, 1000);  //1000 is 1000 miliseconds = 1 second

}
// this will make the image stop moving
// built in javascript funtion to clear interval
function stopMoveImage(){
    document.getElementById("startButton").disabled = false;
//    makes stop button not clickable
    document.getElementById("stopButton").disabled = true;
   
    clearInterval(intervalId);
}