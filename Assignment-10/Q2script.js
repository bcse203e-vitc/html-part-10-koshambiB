
const redButton = document.getElementById('redButton');
const blueButton = document.getElementById('blueButton');

redButton.addEventListener('click', function() {
    document.body.style.backgroundColor = '#ff0000';
});

blueButton.addEventListener('click', function() {
    document.body.style.backgroundColor = '#0000ff';
});
