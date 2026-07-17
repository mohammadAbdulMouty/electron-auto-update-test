console.log("PRELOAD LOADED");
const electron = require('electron')
electron.contextBridge.exposeInMainWorld("electron",{
    updater: {
        onStatus: (callback: (data: any) => void) => {
            electron.ipcRenderer.on("update-status", (event, data) => {
                console.log(data);
                callback(data);
            });
        }
    }
});