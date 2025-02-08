// darkMode
document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.querySelector(".toggle-dark-mode");
    const body = document.body;

    // Check user preference from localStorage
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        toggleBtn.textContent = "☀️ Light Mode";
    }

    toggleBtn.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            toggleBtn.textContent = "☀️ Light Mode";
        } else {
            localStorage.setItem("darkMode", "disabled");
            toggleBtn.textContent = "🌙 Dark Mode";
        }
    });
});




function myMenuFunction(){
    var menuBtn = document.getElementById('mynavMenu');

    // if(menuBtn.className === "nav-menu"){
    //     menuBtn.className += "responsive";
    // }
    // else{
    //     menuBtn.className = "nav-menu";
    // }
    if (menuBtn.classList.contains("responsive")) {
        menuBtn.classList.remove("responsive");
    } else {
        menuBtn.classList.add("responsive");
    }
}
//menu close
document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('click', ()=>{
        setTimeout(()=>{
        var menuBtn = document.getElementById('mynavMenu');
        menuBtn.classList.remove("responsive");
    },1000);
    });
});


window.onscroll = function(){
    headerShadow()
};

function headerShadow(){
    const navHeader = document.getElementById("header");

    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        navHeader.style.boxShadow = "0 1px 6px rgba(0,0,0,0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    }
    else{
        navHeader.style.boxShadow = "none";
        navHeader.style.height ="90px";
        navHeader.style.lineHeight = "90px";
    }
}


// typing effect 
var typingEffect = new Typed(".typedText",{
    strings:["Web Developer","Designer"],
    loop:true,
    typeSpeed : 100,
    backSpeed: 80,
    backDelay: 2000,
})

// social media reveal animation

const sr = ScrollReveal({
    origin: 'top',
    distance : '80px',
    duration: 2000,
    reset: true
});

// Home
sr.reveal('.featured-text-card' , {})
sr.reveal('.featured-name',{delay:100})
sr.reveal('.featured-text-info',{delay:200})
sr.reveal('.featured-text-btn',{delay:200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image', {delay: 300})

// project
sr.reveal('.project-box',{interval:200})

// headings
sr.reveal('.top-header',{})

// About info and contact info

const srLeft = ScrollReveal({
    origin:'left',
    distance:'80px',
    duration:2000,
    reset: true
})

srLeft.reveal('.about-info',{delay:100})
srLeft.reveal('.contact-info',{delay:100})

// about skills and form box 
const srRight = ScrollReveal({
    origin:'right',
    distance:'80px',
    duration:2000,
    reset:true
})
srRight.reveal('.skills-box',{delay:100})
srRight.reveal('.form-control',{delay:400})

// change Active link
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.scrollY;
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){

            document.querySelector('.nav-menu a[href*=' +  sectionId + ']').classList.add('active-link')
        
        }
        else{
           document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    });
}
window.addEventListener('scroll', scrollActive);