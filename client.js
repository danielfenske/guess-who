console.log('Here are all the available people:', people);
$(document).ready(readyNow);

function readyNow(){
    console.log('JQ');

    randomNumber();

    $('header').append(`<h1>click on: ${people[dunker].name}</h1>`)
    displayDunkers();
    
    $('#container').on('click', 'img', personFinder);
    
}

function displayDunkers (){
    console.log('in displayDunkers');
    
    for (let i=0; i<people.length; i++) {
    let person = $(`<div><img data-id=${people[i].name} src="https://github.com/${people[i].githubUsername}.png?size=200" alt="Profile image of Mark">
    </div>`)
    $('#container').append(person);    
    }
} // end displayDunkers

// <HELPER FUNCTION>--------------------------------------------
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

let dunker = randomNumber(0, people.length);
 // </HELPER FUNCTION>--------------------------------------------



function personFinder() {

    let person = $(this).data('id');
    console.log('person', person);

        if (person === people[dunker].name) {
            alert(`You got it`)
        } else {
            alert('wrong, try again');
        }

}// end personFinder