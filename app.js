const inp = document.querySelector("input");
const btn = document.querySelector(".btn");
const ul = document.querySelector("ul");

btn.addEventListener("click",()=>{
    const li = document.createElement("li");
    const deleteBtn =  document.createElement("button");
    deleteBtn.innerText="Delete";
    deleteBtn.classList.add("dlt");

    li.textContent=inp.value;
    ul.prepend(li);
    li.append(deleteBtn);
    inp.value="";
});


ul.addEventListener("click",(event)=>{
    let listItem = event.target.parentElement;
    listItem.remove();

})
// let dltbtns = document.querySelectorAll(".dlt");
// for(del of dltbtns){
//     del.addEventListener("click",()=>{
//     //    let par = this.parent;
//       let par = del.parentElement;
//       par.remove();
//     })
// }