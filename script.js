window.addEventListener('DOMContentLoaded', function () {
    let button = document.createElement('button');
    let btnText = document.createTextNode('Add Square');
    button.appendChild(btnText);
    button.setAttribute('id','addSqrBtn');
    document.body.appendChild(button);

    button.addEventListener('click',addSquare)
});

function addSquare(){
    let squareDiv = document.createElement('div');
    squareDiv.setAttribute('class','sqr-div');
    document.body.appendChild(squareDiv);
}



