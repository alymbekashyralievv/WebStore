import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthPage() {
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [password, setPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = () => {
    if (!loginEmail || !loginPassword) {
      setLoginError('Please fill in all fields.');
      return;
    }
  
    if (!loginEmail.includes('@')) {
      setLoginError('Email must contain @');
      return;
    }
    if (loginPassword.length > 10) {
      alert('Password cannot exceed 10 characters');
      return;
    }
    navigate('/home');
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (password.length > 10) {
      alert('Password cannot exceed 10 characters');
      return;
    }
    setSuccessMessage('Registration successful!');
    setTimeout(() => setSuccessMessage(''), 3000);
    
    navigate('/home');
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="grid grid-cols-2 w-3/4 shadow-lg rounded-xl overflow-hidden">
       
        <div className="p-8 bg-white flex flex-col justify-center">
          {isRegistering ? (
            <div>
              <h2 className="text-2xl font-bold mb-4">Register</h2>
              {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
              <form className="space-y-4" onSubmit={handleRegister}>
                <input type="text" placeholder="Name" className="w-full p-2 border rounded" required />
                <input type="email" placeholder="Email" className="w-full p-2 border rounded" required />
                <input 
                  type="password" 
                  placeholder="Password" 
                  className="w-full p-2 border rounded" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  maxLength={10}
                  required 
                />
                <button type="submit" className="w-full bg-red-500 text-white p-2 rounded">Submit</button>
              </form>
              <button onClick={() => setIsRegistering(false)} className="mt-4 text-sm text-red-500">Already have an account?</button>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold mb-6">Login behoof account</h2>
              {loginError && <p className="text-red-500 mb-4">{loginError}</p>}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border rounded-lg" 
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  required 
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm mb-2">Password</label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    className="w-full px-4 py-2 border rounded-lg" 
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    maxLength={10}
                    required
                  />
                  <button 
                    type="button" 
                    className="absolute inset-y-0 right-0 px-4 text-gray-500" 
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <button
                  onClick={handleLogin}
                  className="bg-red-500 text-white px-6 py-2 rounded-lg font-bold w-full mb-4"
                >
                  Login
                </button>
                <button onClick={() => setIsRegistering(true)} className="text-sm text-red-500">Don't have an account?</button>
              </div>
            </div>
          )}
        </div>

        <div className="p-8" style={{ backgroundColor: isRegistering ? '#f0f0f0' : '#ff4d4d', color: isRegistering ? '#000' : '#fff' }}>
          {isRegistering ? (
            <div>
              <h2 className="text-2xl font-bold mb-4">Join us now!</h2>
              <p>Create an account to receive notifications about price changes and sync your products across all devices.</p>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold mb-4">Welcome Back!</h2>
              <p>Login to your account and stay updated on the latest gadgets.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
