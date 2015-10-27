# ionic-cordova-chrome-tcp-example
Simple app to demostrate the use of cordova plugin chrome socket tcp

1. create ionic project from this repo
2. add cordova tcp plugin (https://github.com/MobileChromeApps/cordova-plugin-chrome-apps-sockets-tcp)
3. try it!

This app has only one screen. On the top there are 3 fields:
- data to be send
- destination's ip address
- destination's port
Then press "send" button and on the bottom you can read the response. The timeout is hardcoded at
line 24 of file js/tcp-services.js

Actually I've only tried this demo on android