console.log('Here are all the available people:', people);

$(document).ready(readyNow);

let dunker = randomNumber(0, people.length);

function readyNow(){
    console.log('JQ');
    $('header').append(`<h1>click on: ${people[dunker].name}</h1>`)
    displayDunkers();
    $('')
}

function displayDunkers (){
    console.log('in displayDunkers');
    
    for (let i=0; i<people.length; i++) {

    let person = $(`<div><img src="https://github.com/${people[i].githubUsername}.png?size=200" alt="Profile image of Mark">
    </div>`)

    $('#container').append(person);    
    }
} // end displayDunkers


function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function personFinder() {
    for (let i=0;i<people.length;i++) {
        if (i === dunker) {
            alert(`${people[i].name}`)
            return true;
        } else {
            alert('wrong, try again');
            return false;
        }
    } // end of loop

}// end personFinder


