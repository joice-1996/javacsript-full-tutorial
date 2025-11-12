function updateButton(selector){
    const button = document.querySelector(selector);

    const previousToggledButton = document.querySelector('.is-toggled');
    if(previousToggledButton){
        previousToggledButton.classList.remove('is-toggled');
    }else{
        button.classList.add('is-toggled');
    }

    button.classList.add('is-toggled');

}