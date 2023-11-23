const typed = new Typed('.typed', {
    strings: ['<i class="Victor">ictor Orihuela Yana</i>'],
    typeSpeed: 95,
    startDelay: 500,
    backSpeed: 150,
    backDelay: 3000,
    loop: false,
    loopCount: false,
    showCursor: true,
    cursorChar: '.',
    contentType: 'html',
});

window.addEventListener("scroll", function () {
    var header = document.getElementById("headerSticky");

    if (window.scrollY > 0) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

const section = document.querySelectorAll("section");

const options = {
    threshold : "0.6",
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting){
            console.log(e.target.id)
        }
        
    });
}, options);

section.forEach(section =>{
    observer.observe(section);
}) 



//Habilidades

const myTag = ['HTML', 'CSS', 'JavaScript', 'React', 'NextJS', 'Redux', 'TypeScript', 'Python', 'Django', 'Express', 'NodeJS', 'BootStrap', 'MogoDB', 'JQuery', 'SCSS', 'PUG'];

var tagcloud = TagCloud('.content', myTag, {
    radius: 200,
    maxSpeed: 'slow',
    initSpeed: 'normal',
    direction: 135,
    keep: true
});




function irASeccion(idSeccion) {
    const seccion = document.getElementById(idSeccion);

    const options = {
        behavior: 'smooth'
    };

    if (idSeccion === 'about') {
        options.block = 'start';
    } else {
        options.block = 'center';
    }

    seccion.scrollIntoView(options);
}

document.getElementById('home').addEventListener('click', function() {
    irASeccion('about');
});

document.getElementById('Proyectos').addEventListener('click', function() {
    irASeccion('projects');
});

document.getElementById('Habilidades').addEventListener('click', function() {
    irASeccion('skills');
});

document.getElementById('Contacto').addEventListener('click', function() {
    irASeccion('contact');
});
