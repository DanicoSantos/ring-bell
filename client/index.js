document.body.onload = function () {
    const actionButton = document.querySelector('#actionButton');
    const audio = document.querySelector('#audio');

    const ringBell = function () {
        audio.play();        
        const buttonsElements = actionButton.querySelectorAll('span');
        const iconElement = buttonsElements[1].querySelector('i');

        actionButton.classList.remove('is-info');
        actionButton.classList.add('is-danger');
        actionButton.classList.remove('play');
        actionButton.classList.add('stop');
        buttonsElements[0].innerHTML = 'Parar';
        iconElement.classList.remove('fa-bell');
        iconElement.classList.add('fa-pause');
    }

    const stopBell = function() {
        audio.pause();
        audio.load();
        const buttonsElements = actionButton.querySelectorAll('span');
        const iconElement = buttonsElements[1].querySelector('i');        

        actionButton.classList.remove('is-danger');
        actionButton.classList.add('is-info');        
        actionButton.classList.remove('stop');
        actionButton.classList.add('play');        
        buttonsElements[0].innerHTML = 'Tocar';
        iconElement.classList.remove('fa-pause');
        iconElement.classList.add('fa-bell');
        
    }

    actionButton.addEventListener('click', function() {
        if (this.className.includes('play')) {
            ringBell();
        } else {
            stopBell();
        }
    });
}