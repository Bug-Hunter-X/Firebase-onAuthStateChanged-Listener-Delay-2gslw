function handleAuthentication() {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        resolve(user);
      } else {
        reject(new Error('User not authenticated'));
      }
    });
  });
}

handleAuthentication()
  .then(user => {
    // Access user data here, it will be guaranteed to be available
    console.log('User authenticated:', user);
    // ... proceed to other actions that depend on the user's authentication state...
  })
  .catch(error => {
    console.error('Authentication error:', error);
    // Handle authentication failure...
  });