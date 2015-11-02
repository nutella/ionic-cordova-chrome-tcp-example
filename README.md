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

## WARNING!

The onReceive listener could be called multiple times for every individual receipt.

#### Example:
I've a device that when I send a command, replies with a string like:

`*FF0046*01484B2D77696669000000000000000000000000000000000000000000000000000000#

in this case, the listener sometimes will be called once with the full string, but often will
be called twice, the first one with the first part of the string and the latter with the remain
part of the string. Rarely the listener will be called more than 2 times. So you need to rebuild
the full packet using and decoding the bytes received. In this example, the packet terminate
with # char, so I can detect and recognize the full packet.