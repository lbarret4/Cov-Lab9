window.addEventListener('DOMContentLoaded', function () {
    let button = document.createElement('button');
    let btnText = document.createTextNode('Add Square');
    button.appendChild(btnText);
    button.setAttribute('id', 'addSqrBtn');
    document.body.appendChild(button);

   button.addEventListener('click', addSquare)
});

function addSquare() {

    let squareDiv = document.createElement('div');
    squareDiv.setAttribute('class', 'sqr-div');
    let numSqr = document.getElementsByClassName('sqr-div').length;
    let squareDivText = document.createTextNode(`${(numSqr + 1)}`);
    squareDiv.appendChild(squareDivText);
    squareDiv.setAttribute('id', `${(numSqr + 1)}`);
    document.body.appendChild(squareDiv);


}
