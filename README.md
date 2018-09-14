# Hub-App

React Native application for interacting with the FSU Innovation Hub and its resources.

The basics were made using [`create-react-native-app`](https://github.com/react-community/create-react-native-app).

The entry point for the app is `./App.js`, and modules are located in `src/`.

## Setting up development environment

**1.)** Ensure that you have Node.JS installed. If you don't, or the version you have is out of date, you can download the latest installer [here](https://nodejs.org/en/download/). We recommend the LTS.

**2.)** We don't have a workflow established just yet, so for the time being just [fork](https://help.github.com/articles/fork-a-repo/#fork-an-example-repository) the repo and clone your fork to your local rig.

```
$ git clone https://github.com/yourUsername/Hub-App.git && cd /Hub-App
```

**3.)** Install the dependencies! Create-react-native-app prefers the Yarn package manager over NPM, but either will work to install and run.

- **Yarn:** `$ yarn install`

- **NPM:** `$ npm install`

**4.)** From there, you can package the app using the start command.

- **Yarn:** `$ yarn start`

- **NPM:** `$ npm start`

| Note: |
|-----|
| *There are other command line args like `npm run ios` that will open your app in an emulator if it's installed on your computer. For more info on emulator use, see create-react-native-app's [readme](https://github.com/react-community/create-react-native-app#npm-test).* |

**5.)** Create-react-native-app will now package your app and display a QR code. Install the [Expo](http://expo.io/) app on your mobile device and scan the QR code to see your app in real time.

| Note: |
|-----|
| *If the app displays a timeout error, it most likely means your device and computer aren't on the same network. Make sure they are, and ensure that Node displays the right IP for your computer below the QR. If your QR is generated using the wrong IP, just type `exp://[yourPCsIP]:19000` into Expo's search bar to connect.* |

-----

Copyright (c) 2018 FSU Innovation Hub
