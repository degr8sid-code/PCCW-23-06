const button = document.querySelector("button");

// this function will automatically turn the button red in the beginning
//it is called instantly
function toggle () {
    button.classList.toggle('altColor');
}

//toggle()

//what if we want to call the function on a certain condition?
//for example on button click
// button.addEventListener('click', toggle)

//same thing in arrow function
button.addEventListener('click', () => {
    button.classList.toggle('altColor');
})

//toggle with () will be called immediately and won't be considered a call back
// toggle = ()=>
//toggle() != ()=>