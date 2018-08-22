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
    squareDiv.addEventListener('mouseover', idSqrShow);
    squareDiv.addEventListener('mouseleave', idSqrShow);
    squareDiv.addEventListener('click', setColor);
    squareDiv.addEventListener('dblclick', rmSquare);
    squareDiv.setAttribute('id', `${(numSqr + 1)}`);
    document.body.appendChild(squareDiv);
}

function idSqrShow(e) {
    if (e.type === 'mouseover') {
        e.target.style.color = "white";
    } else if (e.type === 'mouseleave') {
        e.target.style.color = `${e.target.style.backgroundColor}`
    }
}
function setColor(e) {
    let [red, green, blue] = [Math.ceil(Math.random() * 255), Math.ceil(Math.random() * 255), Math.ceil(Math.random() * 255)];
    e.target.style.background = `rgb(${red},${green},${blue})`;
}

function rmSquare(e) {
    let id = e.target.getAttribute('id');
    let adjacentSqr;


    if (id % 2 === 0) {
        adjacentSqr = e.target.nextSibling;
        (adjacentSqr !== null) ? adjacentSqr.remove() : window.alert('Unable to remove next square')
    } else {
        adjacentSqr = e.target.previousSibling;
        (adjacentSqr !== null && adjacentSqr.nodeName !== 'BUTTON') ? adjacentSqr.remove() : window.alert('Unable to remove previous square');
    }

}



