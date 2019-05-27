let sizeChosen = false;
let cart = []; // shopping cart items

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    // add click button size 
    let sizeButtons = document.getElementsByClassName('size-button');
    for (var i = 0; i < sizeButtons.length; i++) {
        sizeButtons[i].addEventListener('click', addToSizeButtonClicked);
    }
    function addToSizeButtonClicked(event) {
        let topSizeText = document.getElementById('top-size-text')
        topSizeText.innerHTML = event.target.nextElementSibling.textContent;

        sizeChosen = true;

    }


    // add To Cart Button
    let addToCartButton = document.getElementById('addToChatButton');
    addToCartButton.addEventListener('click', addToCartClicked);

    function addToCartClicked(event) {
        if (sizeChosen) {
            cart.push({
                size: document.getElementById('top-size-text').textContent,
                itemName: 'classic tee'
            })
            // update cart quantity
            let quantities = document.getElementsByClassName('items-parentheses');
            for (var i = 0; i < quantities.length; i++) {
                quantities[i].textContent = '( ' + cart.length + ' )';
            }
        } else {
            alert('Please select a size first.');
        }

    }

}

// toggle cart dropdown menu

toggleDropdown = () => {
    let toggleContent = document.getElementById("dropdownContent");

    if (toggleContent.style.display === "none") {
        toggleContent.style.display = "block";
    } else {
        toggleContent.style.display = "none";
    }
}

toggleOpenStyle = () => {
    let openStyle = document.getElementById('open')
    let dropdownContentClick = document.getElementById('dropdownContent')
    if (dropdownContentClick.style.display === "block") {
        openStyle.classList.add('open');
    } else {
        openStyle.classList.remove('open');
    }
}

topToggle = () => {

    toggleDropdown();
    toggleOpenStyle();

}