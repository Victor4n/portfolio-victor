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


if (window.innerWidth > 767) {
    iniciarTyped();
  }

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

const myTag = ['HTML', 'CSS', 'JavaScript', 'React', 'Sass', 'Tailwind', 'Python', 'Git', 'SQL', 'NodeJS', 'BootStrap'];

let tagcloud;

function initTagCloud() {
    tagcloud = TagCloud('.content', myTag, {
        radius: calculateRadius(),
        maxSpeed: 'slow',
        initSpeed: 'normal',
        direction: 135,
        keep: true
    });
}

function calculateRadius() {
    // Puedes ajustar esta función según tus necesidades
    return Math.min(window.innerWidth, window.innerHeight) * 0.4;
}

// Inicializar la nube de etiquetas cuando se carga la página
initTagCloud();

// Volver a calcular el radio y actualizar la nube cuando cambie el tamaño de la ventana
window.addEventListener('resize', function() {
    tagcloud.destroy(); // Destruir la instancia existente
    initTagCloud(); // Volver a inicializar con el nuevo radio
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
