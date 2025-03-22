import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    navigate('/home');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-2xl p-8">
        <h2 className="text-2xl font-bold mb-6">Login behoof account</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2">Email</label>
          <input type="email" className="w-full px-4 py-2 border rounded-lg" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm mb-2">Password</label>
          <div className="relative">
            <input 
              type={showPassword ? "text" : "password"} 
              className="w-full px-4 py-2 border rounded-lg" 
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
        <div className="flex items-center justify-between">
          <button
            onClick={handleLogin}
            className="bg-red-500 text-white px-6 py-2 rounded-lg font-bold"
          >
            Login
          </button>
          <button className="text-gray-500 text-sm">Recover password</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
