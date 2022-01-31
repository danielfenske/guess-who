console.log('Here are all the available people:', people);

$(document).ready(readyNow);

function readyNow(){
    console.log('JQ');

    displayDunkers();
}

function displayDunkers (){
    console.log('in displayDunkers');
    
    for (let i=0; i<people.length; i++) {

    let person = $(`<div><img src="https://github.com/${people[i].githubUsername}.png?size=200" alt="Profile image of Mark">
    </div>`)

    $('#container').append(person);    
    }
} // end displayDunkers