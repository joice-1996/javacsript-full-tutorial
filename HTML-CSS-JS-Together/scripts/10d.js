function updateButton(){
    const button = document.querySelector('.js-gaming-button');
    if(!button.classList.contains('is-toggled')){
        button.classList.add('is-toggled');
        // button.innerHTML = 'Gaming...';
    }else{
        button.classList.remove('is-toggled');
        // button.innerHTML = 'Start Gaming';
    }
}