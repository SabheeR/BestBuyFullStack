// Example using Node.js and bcrypt for password hashing
const bcrypt = require('bcrypt');

// Assuming you have a user object with a password field
const user = {
  username: 'exampleUser',
  email: 'user@example.com',
  // ...
};

// Generate a salt and hash the password
const saltRounds = 10;

bcrypt.hash(user.password, saltRounds, (err, hash) => {
  if (err) {
    console.error('Error hashing password:', err);
  } else {
    // Store the hashed password in the user object or save it to the database
    user.password = hash;
    console.log('Hashed password:', hash);
  }
});


const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


// Example using Node.js and bcrypt for password verification
const bcrypt = require('bcrypt');

// Assuming you have a user object with a hashed password stored in the database
const savedHashedPassword = '$2b$10$2C2Tr6LH3uFe/xSRwq/7buk/Wg4c3xnuOagNspBC4ew76.XXX';
const enteredPassword = 'userEnteredPassword'; // This is the password entered by the user during login

// Compare the entered password with the hashed password from the database
bcrypt.compare(enteredPassword, savedHashedPassword, (err, result) => {
  if (err) {
    console.error('Error comparing passwords:', err);
  } else if (result) {
    console.log('Password is correct');
    // Allow user to log in
  } else {
    console.log('Password is incorrect');
    // Deny access - incorrect password
  }
});



