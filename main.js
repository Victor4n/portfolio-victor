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

