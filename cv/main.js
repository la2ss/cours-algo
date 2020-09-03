
let part = document.querySelector('section');

part.addEventListener('click', function() {
    let affichemobile = part.getAttribute('section');
    if (affichemobile === '.cl1') {
        part.setAttribute('.cl2');
    } else {
        part.setAttribute('.cl1');
    }