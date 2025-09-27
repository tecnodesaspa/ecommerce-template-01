document.addEventListener("DOMContentLoaded", function () {
        document.getElementsByClassName('nav-menu-responsive')[0].addEventListener('click', () => {
            console.log('click');
            if(document.getElementsByClassName('nav-menu')[0].classList.contains('responsive-menu')){
                document.getElementsByClassName('nav-menu')[0].classList.remove('responsive-menu')
                document.getElementsByClassName('nav')[0].classList.remove('responsive-navmenu')
            } else {
                document.getElementsByClassName('nav-menu')[0].classList.add('responsive-menu')
                document.getElementsByClassName('nav')[0].classList.add('responsive-navmenu')
            }
        })
});