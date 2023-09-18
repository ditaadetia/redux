import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import '../../App.css';
import { authLoginApi } from './redux/action';

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const appData = useSelector((state) => state);

  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(authLoginApi({ username, password }))
      .then((resultAction) => {
        const data = resultAction.payload;
        if (data) {
            console.log("Login berhasil");
            navigate('/beranda');
        } else {
          // Login gagal, atur pesan kesalahan
          setError("Login gagal. Username atau password salah.");
        }
      });
  };

  if (appData.isLoading) {
    return <h1>Loading...</h1>;
  }

    return (
        <div className="login">
        <h2>Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Menampilkan pesan kesalahan jika ada */}
        <div>
            <label>Username:</label>
            <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            className="input"/>
        </div>
        <div className="mt-3">
            <label>Password:</label>
            <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            />
        </div>
        <button className="input mt-3" onClick={handleLogin}>Login</button>
        </div>
    );
}
