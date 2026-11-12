const toggle=document.querySelector("#theme-btn");

if(localStorage.getItem("theme")=== "dark"){
    document.body.classList.add("dark");
}

toggle.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
    const isDark=document.body.classList.contains("dark");
    localStorage.setItem("theme" , isDark ? "dark" : "light");
});