let upto=document.querySelector(".first");


let links=document.querySelectorAll(".nav-link");
let sections=document.querySelectorAll("section");
let closes=document.querySelectorAll(".close");
let imgBoxs=document.querySelectorAll(".portfolio-box .img");
let overlays=document.querySelectorAll(".overlay-modale");
imgBoxs.forEach(img=>{
    img.onclick=()=>{
        let attr=img.dataset.target;
        overlays.forEach(overlay=>{
            if(attr==overlay.dataset.target){
                overlay.classList.add("active");
            }
            
        })
        
    }
    
})
closes.forEach(close=>{
    close.onclick=()=>{
        close.parentElement.parentElement.parentElement.classList.remove('active');
    }
})
links.forEach(e=>{
    e.onclick=()=>{
        links.forEach(l=>l.classList.remove('active'))
        e.classList.add('active')
    };
    
})
window.addEventListener("scroll",testMAtchMedia);
function testMAtchMedia(){
    let nav=document.querySelector(".navbar");
    var x=window.matchMedia("(min-width:992px)");
    if(window.scrollY!==0){
        if(x.matches){
        nav.classList.add('active');
        }
    }else{
        if(x.matches){
        nav.classList.remove('active');
        }
    }
}
upto.onclick=()=>{
    window.scrollTo(0,0);
}
window.onscroll=()=>{
    if(window.scrollY!==0){
        upto.style.display="block";
        
    }else{
        upto.style.display="none";
        
    }
    
    let current="";
    sections.forEach(section=>{
        let sectionTop=section.offsetTop;
        if(pageYOffset>=sectionTop-60){
            current=section.getAttribute("id");
        }
        links.forEach(link=>{
            link.classList.remove("active");
            if(link.dataset.id==current){
                link.classList.add("active");
            }
        })
    })
}
