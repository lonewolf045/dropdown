// (function() {
//     const containerDiv = document.querySelector('.click-info-container');
//     containerDiv.style.display = 'none';
//     const clickButton = document.querySelector('#click-button');
//     clickButton.addEventListener('click',() => {
//         if(containerDiv.style.display == 'none') {
//             containerDiv.style.display = 'block';
//         } else {
//             containerDiv.style.display = 'none';
//         }
//     });
// })();

module.exports = function dropdown (buttonRef , menuContainer) {
    menuContainer.style.display = 'none';
    buttonRef.addEventListener('click',() => {
        if(menuContainer.style.display == 'none') {
            menuContainer.style.display = 'block';
        } else {
            menuContainer.style.display = 'none';
        }
    });
}

// export default addDropDownFunctionality;