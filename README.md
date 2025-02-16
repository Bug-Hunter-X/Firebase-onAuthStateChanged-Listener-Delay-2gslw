# Firebase onAuthStateChanged Listener Delay

This repository demonstrates a common but subtle issue with Firebase Authentication's `onAuthStateChanged` listener.  In certain scenarios, the listener might not immediately reflect changes in the authentication state. This can lead to unexpected errors if your app attempts to access user data before the state is updated.

The provided code showcases the problem and a potential solution using promises to handle asynchronous operations.

## Steps to Reproduce

1. Clone this repository.
2. Install Firebase and any other required dependencies.
3. Configure your Firebase project and replace placeholders with your actual Firebase config.
4. Run the `firebaseBug.js` script.
5. Observe the potential `null` values or errors related to accessing user data before the `onAuthStateChanged` listener completes.
6. Run the `firebaseBugSolution.js` script to see the improved solution using promises.

## Solution

The solution involves using promises or async/await to ensure that user data is accessed only after the authentication state is confirmed by the `onAuthStateChanged` listener.