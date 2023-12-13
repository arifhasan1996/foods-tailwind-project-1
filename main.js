const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const closeBar = document.getElementById('closeBar');
const nav_link = document.querySelectorAll('.nav-link');


nav_link.forEach(link =>{
    link.addEventListener('click', () =>{
        navMenu.classList.add('hidden');
    })
})
hamburger.addEventListener('click', () =>{
    navMenu.classList.remove('hidden');
})
closeBar.addEventListener('click', () =>{
    navMenu.classList.add('hidden');
});


/*==============Tabs section functionallity=========*/
const tabs = document.querySelectorAll(".tabs_wrap ul li");
const all = document.querySelectorAll('.item__wrap');
const foods = document.querySelectorAll('.foods');
const snack = document.querySelectorAll('.snack');
const beverege = document.querySelectorAll('.beverege');
tabs.forEach(tab =>{
    tab.addEventListener('click',() =>{
        tabs.forEach(tab =>{
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        const tabval = tab.getAttribute('data-tabs')
        all.forEach(item =>{
            item.style.display = 'none'
        })
        if(tabval == 'foods'){
            foods.forEach(item =>{
                item.style.display = 'block'
            })
        } else if(tabval == 'snack'){
            snack.forEach(item =>{
                item.style.display = 'block'
            })
        } else if(tabval == 'beverege'){
            beverege.forEach(item =>{
                item.style.display = 'block'
            })
        }
        else{
            all.forEach(item =>{
                item.style.display = 'block'
            })
        }
    })

});

/*==============Dark light theme=========*/
const html = document.querySelector('html')
const themeBtn = document.getElementById('theme-toggle')

if(localStorage.getItem("mode") == "dark"){
    darkMood();
}
else{
    lightMood();
}

themeBtn.addEventListener('click', (e)=>{
    if(localStorage.getItem("mode") == "light"){
        darkMood();
    } else{
        lightMood();
    }

})

function darkMood () {
    html.classList.add('dark');
    themeBtn.classList.replace('ri-moon-line', 'ri-sun-line');
    localStorage.setItem("mode", "dark");
}
function lightMood () {
    html.classList.remove('dark');
    themeBtn.classList.replace('ri-sun-line', 'ri-moon-line');
    localStorage.setItem("mode", "light");
}
/*==============Show scroll up=========*/
const scrollUp = () =>{
    const scrollUpBtn = document.getElementById('scroll-up');
    if(this.scrollY >= 250){
        scrollUpBtn.classList.remove('-bottom-1/2');
        scrollUpBtn.classList.add('bottom-4');
    }
    else{
        scrollUpBtn.classList.add('-bottom-1/2');
        scrollUpBtn.classList.remove('bottom-4');
    }
}
window.addEventListener('scroll', scrollUp)
/*==============Change background header=========*/
const scrollHeader = () =>{
    const scrollHeader = document.getElementById('scrollHeader');
    if(this.scrollY >= 50){
        scrollHeader.classList.add('border-b', 'border-secondaryColor');
    }
    else{
        scrollHeader.classList.remove('border-b', 'border-secondaryColor');
    }
}
window.addEventListener('scroll', scrollHeader)
/*==============Scroll section active link=========*/
const activeLink = () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = "home";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(item => {
        item.classList.remove('text-secondaryColor');
        if (item.href.includes(current)) {
            item.classList.add('text-secondaryColor');
        }
    });
};

window.addEventListener('scroll', activeLink);

/*==============Scroll section active link=========*/
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 10
})

sr.reveal(".home__img");
sr.reveal(".home__header", {origin: "bottom"});
sr.reveal(".catagories__cards",{intervel: 300});
sr.reveal(".promo__1", {origin: "left"});
sr.reveal(".promo__2", {origin: "right"});
sr.reveal(".about__img", {origin: "bottom"});
sr.reveal(".about__content", {origin: "top"});
sr.reveal(".menu__items", {origin: "left"});
sr.reveal(".customer__review", {origin: "right"});
sr.reveal(".footer");