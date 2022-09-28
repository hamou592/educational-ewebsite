//working on adding social media part when we do hover

let members = document.querySelectorAll(".member")


members.forEach(member =>{
    member.addEventListener("mouseover", () =>{
        const social = member.querySelector(".social-media");
        social.style.display = "block";
    })
    member.addEventListener("mouseout", ()=>{
        const social = member.querySelector(".social-media");
        social.style.display = "none";
    })
})

//make background to nav when we scroll


window.addEventListener("scroll",() => {
    document.querySelector(".top-part").classList.toggle("window-scroll",window.scrollY > 88);
})

//this is for the close-open button

let closee = document.querySelector(".close");
let menu = document.querySelector(".menu");
let list = document.querySelector(".top-part ul");
menu.addEventListener("click",()=>{
    list.style.display = 'block';
    menu.style.display="none";
    closee.style.display="block";
})

closee.addEventListener("click",()=>{
    list.style.display = 'none';
    menu.style.display="block";
    closee.style.display="none";
})