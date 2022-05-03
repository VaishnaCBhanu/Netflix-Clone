// let accordian = document.getElementsByClassName("FAQ_title");

// for(let i=0; i < accordian.length; i++){
//     accordian[i].addEventListener("click", function(){
//         if (this.childNodes[1].classList.contains("fa-plus")){
//             this.childNodes[1].classList.remove("fa-plus");
//             this.childNodes[1].classList.add("fa-times");
//         }
//         else{
//             this.childNodes[1].classList.remove("fa-times");
//             this.childNodes[1].classList.add("fa-plus");
//         }

//         let content=this.nextElementSibling;
//         if(content.style.maxHeight){
//             content.style.maxHeight=null;
//         }
//         else{
//             content.style.maxHeight=content.scrollheight + "px"; 
//         }
//     });
// }


let accordion = document.getElementsByClassName("accordion");
const totalAccordions = accordion.length;

for (let i = 0; i < totalAccordions; i++) {
  accordion[i].addEventListener("click", (e) => {
    let panel = e.target.nextElementSibling;

    if (panel.classList[1] === "panel-closed") {
      panel.classList.add("panel-open");
      panel.classList.remove("panel-closed");
    } else {
      panel.classList.add("panel-closed");
      panel.classList.remove("panel-open");
    }
  });
}
