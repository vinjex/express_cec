# express_cec

Turn on and off your cec-enabled TV using GET requests

GET [your host IP] /tv_on -> Turns on the TV

GET [your host IP] /tv_off -> Turns off the TV

### Requirements

#### [Node](https://nodejs.org/en/)
Installation for Node8 on Debian and Ubuntu
````
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
apt install -y nodejs
````

#### [libcec](https://github.com/Pulse-Eight/libcec)
````
apt install -y cec-utils
````

### Initial Setup
````
git clone https://github.com/vinjex/express_cec.git
cd ./express_cec
npm i
````

### Starting the server
````
node index.js
````

### Examples
#### Chromium Kiosk mode on DietPi with LXDE
````
apt install chromium-browser
apt install unclutter
cd
git clone https://github.com/vinjex/express_cec.git
cd ./express_cec
npm i
nano /etc/xdg/lxsession/LXDE/autostart

### Insert the following lines at the end of the file
@unclutter -idle 0
@chromium-browser --incognito --no-sandbox -test-type --kiosk [URL of a website]
@node [PATH to express_cec's index.js]
###

sudo reboot now
````
###
