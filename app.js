const jwt = require('jsonwebtoken');

// Function to create and sign a JWT
function createJWT() {
    const payload = {
      userId: 123,
      username: 'simran1'
    };
    const secretKey = 'Simran$12'; // Replace with your secret key
  
    // Sign the JWT with the payload and secret key
    const token = jwt.sign(payload, secretKey);
  
    console.log('JWT Token:', token);
  }

  // Function to verify a JWT
function verifyJWT(token) {
  const secretKey = 'Simran$12'; // Replace with your secret key

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      console.error('JWT Verification Failed:', err.message);
    } else {
      console.log('JWT Verified. Decoded:', decoded);
    }
  });
}

// Replace 'yourTokenHere' with a JWT token you generated in Step 4
const jwtTokenToVerify = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywidXNlcm5hbWUiOiJzaW1yYW4xIiwiaWF0IjoxNzEzNzcyMzkyfQ.DBAz8Z3dKciZXZlIWCktnNLJeMUqDu2m67nGbAmAP3E';

// Call the function to verify the JWT
verifyJWT(jwtTokenToVerify);
  
  // Call the function to create and sign a JWT
  createJWT();

  // Function to decode a JWT
function decodeJWT(token) {
  const decoded = jwt.decode(token);

  console.log('Decoded JWT:', decoded);
}

// Replace 'yourTokenHere' with a JWT token you generated in Step 4
const jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywidXNlcm5hbWUiOiJzaW1yYW4xIiwiaWF0IjoxNzEzNzcyNjg5fQ.s9CdxolsUHac-TSbTuE_s-GPv9HlXdCCAkYEL1FBc7Q';

// Call the function to decode the JWT
decodeJWT(jwtToken);