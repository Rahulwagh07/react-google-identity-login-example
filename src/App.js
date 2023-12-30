/* global google */

import './App.css';
import { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

function App() {
  
  function handleCallbackResponse(response) {
    console.log("Encoded JWT Token: " + response.credential);
    const userObject = jwtDecode(response.credential);
    console.log(userObject);
  }

  function handleGoogleSignIn() {
    google.accounts.id.initialize({
      client_id: "",
      callback: handleCallbackResponse
  });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    );
   }

  useEffect(() => {
    handleGoogleSignIn()
  }, []);

  return (
    <div className="App" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div id='signInDiv' onClick={handleGoogleSignIn}></div>
    </div>
  );
}

export default App;
