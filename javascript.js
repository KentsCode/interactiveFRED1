
//The main purpose of the activator function is to toggle classes. First it checks to see if any class is set to 
//"activated". If it is that class is changed to "inactivated". Each time a class is changed it triggers an animation.
//A timer is added so that two animations do not take place at the same time.

//lastElement tracks the last element that was clicked on. This is so we don't lose track of what element we are 
//working on while switching classes.
let lastElement = "";

function activator (clickedID) {
    
    let element = document.getElementById(clickedID).innerHTML.toLowerCase();
    console.log(element, "element");
    let targetID = document.getElementById(element);
    //activeElement gets elements with a class named "activated".
    let activeElement = document.getElementsByClassName('activated');
    
    //We check to see if any elements are active see "let activeElement" above.
    if (lastElement === element && activeElement.length > 0) {
        console.log("same");
        targetID.classList.remove('activated');
        targetID.classList.add('inactivated');
    } else if (activeElement.length > 0) {
        lastElement = element;
        console.log(lastElement, "lastElement");
        document.getElementById(lastElement).classList.remove('activated');
        document.getElementById(lastElement).classList.add('inactivated');
        //startTimer function starts a timer so that the first animation ends before the second one starts.
        function startTimer () {
            setInterval(myTimer, 100);
        }
        var counter = 10;
        function myTimer() { 
            counter--;
            if (counter === 1) {
                targetID.classList.remove('inactivated');
                targetID.classList.add('activated');
            } else if (counter === 0) {
                clearInterval(startTimer);
            }
        }
        startTimer();
    } else {
        lastElement = element;
        targetID.classList.remove('inactivated');
        targetID.classList.add('activated');
    }
}

