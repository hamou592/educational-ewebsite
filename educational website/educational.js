//show /hide faqs

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click",() => {
        faq.classList.toggle("open");
        //change the add icon to the minus icon
        const icon = faq.querySelector(".faq i");
        //if we click to show the answer
        if(icon.className === "uil uil-plus"){
            icon.className = "uil uil-minus";
        //if we click to hide the answer
        }else{
            icon.className = "uil uil-plus";
        }
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