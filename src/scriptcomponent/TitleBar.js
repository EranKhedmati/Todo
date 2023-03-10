// Search fucntionallty ---------------------------------------------------
const search = document.getElementById("title-bar_search"),
    searchBody = document.querySelector(".search-body"),
    searchModalEsc = document.querySelector(".search-modal-esc"),
    searchContent = document.querySelector(".search-content");

// focuse in
search.addEventListener("focusin", () => {
    // Add border radius style
    searchBody.style.borderRadius = '20px 20px 0 0';
    search.style.borderRadius = '20px 20px 0 0';
    searchBody.style.borderBottom = '1px #999 solid';
    // Add Display style to showen
    searchModalEsc.style.display = 'block';
    searchContent.style.display = 'block';

})

// Focuse out
searchModalEsc.addEventListener("click", () => {
    
    // Add boder radius style 
    searchBody.style.borderRadius = '20px';
    search.style.borderRadius = '20px';
    searchBody.style.borderBottom = '0';

    // Add Display style to hidden
    searchModalEsc.style.display = 'none';
    searchContent.style.display = 'none';

})

// take an action for winodw => close, minimize ----------------------------

const { ipcRenderer } = require("electron")
const ipc = ipcRenderer;

// Minimize winodw
const minimize = document.getElementById("minimize");
minimize.addEventListener("click", () => {
    ipc.send("minimizeApp")
})

// Close window
const esc = document.getElementById("esc")
esc.addEventListener("click", () => {
    ipc.send("closeApp")
})