/*const h1 = document.createElement('h1');
h1.textContent = "Skills";
document.querySelector('body').appendChild(h1);
*/

const header = document.querySelector('#header');

const button = document.querySelector('#btn');

const skills = document.querySelector('#skills');

function clickAlert1() {
        alert('You are beautiful!');
}

header.addEventListener('click', function() {
    alert("Those eyes are to die for!");
});


button.addEventListener('click', clickAlert1);

