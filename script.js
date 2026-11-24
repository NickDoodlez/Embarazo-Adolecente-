const boton=document.getElementById("menu");
const nav=document.getElementById("nav");
boton.addEventListener("click",()=>{
const abierto=nav.classList.toggle("abierto");
boton.setAttribute("aria-expanded",abierto);
});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
nav.classList.remove("abierto");
boton.setAttribute("aria-expanded","false");
}));
document.querySelectorAll(".mito").forEach(m=>{
m.addEventListener("click",()=>{
m.setAttribute("aria-pressed",m.getAttribute("aria-pressed")==="true"?"false":"true");
});
});
const ramitas=document.getElementById("ramitas");
const sonido=document.getElementById("cuteSound");
ramitas.addEventListener("click",()=>{
sonido.currentTime=0;
const p=sonido.play();
if(p&&p.catch)p.catch(()=>{});
ramitas.classList.remove("squish");
void ramitas.offsetWidth;
ramitas.classList.add("squish");
});
ramitas.addEventListener("animationend",e=>{
if(e.animationName==="squishy")ramitas.classList.remove("squish");
});
document.getElementById("anio").textContent=new Date().getFullYear();
