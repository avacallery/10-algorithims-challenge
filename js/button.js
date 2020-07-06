// Complete the code in the editor so that it creates a clickable button satisfying the following properties:
// the button's id is btn
// the button's initial text label is 0 and must increment by 1 by each click
// width of 96px
// height of 48px
// the font-size attribute is 24px

let buttonCounter = document.getElementById('btn');

buttonCounter.addEventListener('click', function () {
  buttonCounter.innerHTML = +buttonCounter.innerHTML + 1;
});
