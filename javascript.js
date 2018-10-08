
//The main purpose of the activator function is to toggle classes. First it checks to see if any class is set to 
//"activated". If it is that class is changed to "inactivated". Each time a class is changed it triggers an animation.
//A timer is added so that two animations do not take place at the same time.

//lastElement tracks the last element that was clicked on. This is so we don't lose track of what element we clicked last.
let lastElement = "";

function activator (clickedID) {
    
    //we are using the text of the button to identify which part it belongs to.
    let element = document.getElementById(clickedID).innerHTML.toLowerCase();
    //targetID we get the element by it's ID which is similar to the inner text of the button.
    let targetID = document.getElementById(element);
    //activeElement gets elements with a class named "activated".
    let activeElement = document.getElementsByClassName('activated');
    
    //if we clicked on the same element as last time and no elements are active set the current element to active.
    if (lastElement === element && activeElement.length === 0) {
        console.log("same");
        document.getElementById(element).classList.remove('inactivated');
        document.getElementById(element).classList.add('activated');
    //else if we clicked on the same element as last time and there is an active element then inactivate the current element.
    } else if (lastElement === element && activeElement.length === 1) {
        console.log("2");
        targetID.classList.remove('activated');
        targetID.classList.add('inactivated');
    //else if there is an active element and it is different than what we clicked on last time. Toggle classes on last 
    //element to move it back into place and after the timer runs toggle the classes on the new element to move it.
    } else if (activeElement.length === 1 && lastElement != element) {
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
        lastElement = element;
    //if nothing has been clicked yet, there are no active elements activate the current one.
    } else {
        console.log("last");
        //targetID.classList.remove('inactivated');
        targetID.classList.add('activated');
        lastElement = element;
    }
}

