import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);



/* Here is the explanation for the code above:
1. The registerRootComponent function takes in a single argument, which is the component to be rendered when the app starts. 
In this case, we’re passing in the App component. 

2. The registerRootComponent function is imported from the expo package, 
which is a dependency that is installed automatically when you create a new project using expo init. 
The expo package contains libraries that make it easier to use certain APIs from the Expo SDK in React Native. 
The registerRootComponent function also makes sure that whether you load the app in Expo Go or in a native build, 
the environment is set up appropriately. This makes it easier for you to write code that works exactly the same 
in Expo Go and in a native build.

3. If you look at App.js, you’ll see that the App component is exported using export default. 
This means that when we import App from App.js, we’re importing the App component itself, 
not the App variable that contains the component. 
This is why we can pass in App as the argument to registerRootComponent. */