const electron = require('electron')

const { app, BrowserWindow } = electron
const path = require('path')

function createWindow () {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    },
    backgroundColor: '#000',
    icon: path.join(__dirname, 'assets/icons/png/netflix.png')
  })

  win.on('closed', () => win = null)
  win.loadURL('https://netflix.com')
}

app.on('ready', createWindow);