!function(){const e=document.querySelector("#value");let t=0;const n=document.querySelector('[data-action="decrement"]'),o=document.querySelector('[data-action="increment"]'),c=document.querySelector("#name-input"),r=document.querySelector("#name-output"),d=document.querySelector(".color"),u=document.querySelector(".change-color");document.querySelector(".widget");const l=()=>{const e=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;d.textContent=e,document.body.style.backgroundColor=e},a=document.querySelector("#pill3");
//!=======================homeWork 8============================
o.addEventListener("click",(()=>{t+=1,e.textContent=t})),n.addEventListener("click",(()=>{t-=1,e.textContent=t})),c.addEventListener("input",(e=>{r.textContent=e.currentTarget.value,""===r.textContent.trim()&&(r.textContent="Anonymous")})),
//!=======================homeWork 9============================
a.addEventListener("click",(()=>{a.checked?u.addEventListener("click",l):u.removeEventListener("click",l)}))}();
//# sourceMappingURL=index.c3f7e605.js.map
