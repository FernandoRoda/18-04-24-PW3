import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app'; // alterado aqui
import 'firebase/compat/auth'; // alterado aqui


// Configure Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCWt7__BetJtFOZGXntl7CaXOxBWZeSq9w",
  authDomain: "etec-8f1c9.firebaseapp.com",
  databaseURL: "https://etec-8f1c9-default-rtdb.firebaseio.com",
  projectId: "etec-8f1c9",
  storageBucket: "etec-8f1c9.appspot.com",
  messagingSenderId: "1070246420297",
  appId: "1:1070246420297:web:f26c0b33636b63024a0498",
  measurementId: "G-37FSGMMWSE"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      setError(null);
      window.location.href ="https://matias.me/nsfw/"
      // Login bem-sucedido, você pode redirecionar ou fazer outras ações aqui
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Autenticação no Firebase</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;
