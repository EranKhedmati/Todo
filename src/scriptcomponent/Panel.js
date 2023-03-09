// Set active to panel btn
const panelBtn = document.querySelectorAll(".panel-btn")
const panelBtnIcon = document.querySelectorAll(".panel-btn-icon");

function removeActiveIcon() {
    panelBtnIcon.forEach(btnIcon => {
        btnIcon.classList.remove("panel-btn-active")
    })
}

panelBtn.forEach(btn => {
    btn.addEventListener("click", ()=>{
        // console.log(btn.firstElementChild.classList);
        if(btn.firstElementChild.classList.contains("panel-btn-icon") == true) {
            removeActiveIcon();
            btn.firstElementChild.classList.add("panel-btn-active")
        }
    })
})
