const { app, BrowserWindow } = require("electron");
const path = require("path");
const { ipcMain } = require("electron")
const ipc = ipcMain;

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        resizable: false,
        transparent: true,
        frame: false,
        webPreferences: {
            preload: path.resolve(__dirname, "preload.js"),
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    win.loadFile("public/index.html")

    // Actoins
    ipc.on("closeApp", () => {
        console.log('clicked on close btn');
        win.close();
    })

    ipc.on("minimizeApp", () => {
        win.minimize();
    })
}

app.whenReady().then(() => {
    createWindow()
    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on("window-all-closed", () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})