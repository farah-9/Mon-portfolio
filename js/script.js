// Fonction pour activer le mode plein écran pour une vidéo
function activateVideoFullscreen(video) {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
    }
}

// Fonction pour désactiver le mode plein écran
function deactivateFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

// Fonction pour gérer le clic sur une vidéo
function handleVideoClick(event) {
    event.preventDefault();
    const video = this.querySelector('video');

    if (video) {
        if (
            document.fullscreenElement === video ||
            document.mozFullScreenElement === video ||
            document.webkitFullscreenElement === video ||
            document.msFullscreenElement === video
        ) {
            deactivateFullscreen();
        } else {
            activateVideoFullscreen(video);
        }
    }
}

// Ajouter des écouteurs d'événement aux vidéos pour activer le mode plein écran
document
    .querySelectorAll('.portfolio-box .expandable video')
    .forEach(function (videoContainer) {
        videoContainer.addEventListener('click', handleVideoClick);
    });

// Ajouter un écouteur d'événement pour le bouton "Esc" pour quitter le mode plein écran
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        deactivateFullscreen();
    }
});

// Ajouter un écouteur d'événement pour détecter la sortie du mode plein écran
document.addEventListener('fullscreenchange', function () {
    if (!document.fullscreenElement) {
        deactivateFullscreen();
    }
});

/* ================toggle icon navbar============= */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* ================scroll section active link============= */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if ((top >= offset) & (top < offset + height)) {
            navLinks.forEach((links) => {
                links.classList.remove('active');
                document
                    .querySelector('header nav a[href*=' + id + ']')
                    .classList.add('active');
            });
        }
    });

    /* ================sticky navbar============= */

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /* ================remove toggle icon and navbar when click navbar link (scroll)============= */

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* ================scroll reveal============= */

ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });

ScrollReveal().reveal(
    '.home-img, .competences-container, .portfolio-box, .contact form',
    { origin: 'bottom' }
);

ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });

ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/* ================Typed js============= */
const typed = new Typed('.multiple-text', {
    strings: [
        'Développeur Full Stack',
        "Concepteur Développeur d'Applications",
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});
