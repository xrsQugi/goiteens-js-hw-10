export const span = document.querySelector(".color")
export const btnChangeColor = document.querySelector(".change-color")
export const divWidget = document.querySelector(".widget");

// if (document.body.style.backgroundColor = '#FFFFFF') {
//     divWidget.style.backgroundColor = '#D9D9D9';
//     btnChangeColor.style.backgroundColor = '#FFFFFF';
// }

export function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const changeColorOnClick = () => {
    const color = getRandomHexColor();
    span.textContent = color;
    document.body.style.backgroundColor = color;
    // divWidget.style.backgroundColor = '#FFFFFF';
    // btnChangeColor.style.backgroundColor = '#D9D9D9';
}

//!pill ===============================================================
export const toggle = document.querySelector('#pill3');

export const handleClick = () => {
  console.log("click event listener callback");
}

export const changeListenerBtn = () => {
    if(toggle.checked){
        btnChangeColor.addEventListener('click', changeColorOnClick);
    } else{
        btnChangeColor.removeEventListener('click', changeColorOnClick);
    }
}

