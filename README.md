# Intro 

Since I was not supposed to use other libraries, I had to re-implement some patterns in a simplified way:
•	An useDebounceValue hook to avoid making a query on every input change
•	An useAsync hook to manage the states of an asynchronous call
•	A mini theme system with a hook and a HoC to modularize its usage
•	A Checkbox component

However, I made a small exception to the rule to make the edit mode configurable. To activate the edit mode:
•	Create a `.env` file at the root with the content `editable=true`. You can copy the provided sample `.env.sample` to `.env`
•	Restart Metro with `yarn start`

For the tests, I allowed myself to install `react-native-testing-library` and implemented a few tests.

You will also find in `quizz.md` my answers to your quizz.

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.
