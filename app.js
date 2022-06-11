// Scroll to section on link click

const links = document.querySelectorAll(".navigation-ul li a");
 
for (const link of links) {
    link.addEventListener("click", smoothScroll);
}

function smoothScroll(e) {
    e.preventDefault();
    const href = this.getAttribute("href");

    document.querySelector(href).scrollIntoView({
        behavior: "smooth"
    });
}

// Set sections as active

const li =document.querySelectorAll(".links");
const sec=document.querySelectorAll("section");

function activeMenu(){
    let len=sec.length;
    while(--len && window.scrollY + 97 < sec[len].offsetTop){}
        li.forEach(ltx => ltx.classList.remove("active"));
        li[len].classList.add("active");
    }
    activeMenu();
    window.addEventListener("scroll", activeMenu);





// getBoundingClientRect

const box = document.querySelector('.landing__container');
document.addEventListener('scroll', () => {
    const rect = box.getBoundingClientRect();
    console.log(rect);
})

// build the nav

let navbar = document.querySelector('.nav');

let others = ['About'];

let nodes = others.map(other => {
    let li = document.createElement('li');
    li.textContent = other;
    return li;
});

navbar.append(...nodes);


const node =document.createElement ("li");
const textnode = document.createTextNode("CitixUdacity");
node.appendChild(textnode);
document.getElementById("navbar").appendChild(node);


let html = document.getElementById("landinglist").innerHTML;
document.getElementById("author").innerHTML = html;