// toggle icon navbar

let menuIcon = document.querySelector('#menu-icon1');
let navbar = document.querySelector('.navebar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}


// scroll section active
let sections = document.querySelectorAll('section');
let naveLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let Height = sec.offsetHeight;
        let id  = sec.getAttribute('id');

        if(top >= offset && top < offset + Height) {
            naveLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });

        };

    });



// sticky navbar

let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);


// remove toggle icon and navbar

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');


};

// typed js

const typed = new Typed('.multiple-text',{
    strings: ['Frontend Developer', 'YouTuber', 'Blogger'],
    typeSpeed: 100,
    backSepeed:100,
    backDelay:1000,
    loop:true
})