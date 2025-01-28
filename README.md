## To Do List App in React Native for CS4261

### Set up repository locally
 - Clone the repository
 - I recommend opening the repository in VS Code
 - Run `npm install -g expo-cli` to install expo
 - Navigate into the repository directory and run `npm install`

### Development
- Use `npx expo start` to compile code and start the server
- To run this app on device, follow instructions outputted to terminal to install the Expo app on iOS or Android.
- To use emulators, you should also follow the instructions outputted to terminal. You will likely see errors if you have not already set up XCode, simulators, etc.
    - For example, if you're trying to test in a web browser, you might see instructions to run `npx expo install react-dom react-native-web` after trying to start the app for the first time.

### Firebase and Weather API
- The firebase realtime database is configured in 'test' mode, and anyone can access it. The `firebaseConfig` is checked into this repo
- The weather functionality, whose code is in the `weather` file requires an API key. You will need to create a `weatherApiKey` file and export your OpenWeather API key from that file.
