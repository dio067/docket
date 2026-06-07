import { useState } from "react";
import { login } from "../api/auth";
import { useNavigate } from "react-router";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center justify-center bg-[#0f0f0f] min-h-screen'>
      <div className='flex flex-col bg-mist-900  shadow-md justify-center items-center max-w-sm p-4 sm:p-6 h-2xl mx-auto border rounded-lg'>
        <h1 className='text-white bold text-2xl m-4 p-3'>Sign In</h1>
        <div className='flex flex-col'>
          <label className='text-white '>Username:</label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            placeholder='username'
            className='placeholder-[#666] text-white bg-[#1a1a1a] border border-[#2a2a2a] p-3 w-xs my-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all'
          ></input>
        </div>
        <div className='flex flex-col'>
          <label className='text-white'>Password:</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password'
            type='password'
            className='border-[#2a2a2a] border text-white bg-[#1a1a1a] placeholder-[#666] p-3 w-xs my-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all'
          ></input>
        </div>
        <button
          onClick={() => {
            login(username, password)
              .then((res) => {
                localStorage.setItem("access_token", res.data.access);
                localStorage.setItem("refresh_token", res.data.refresh);
                navigate("/");
              })
              .catch(() => {
                setError(true);
              });
          }}
          className='rounded-3xl m-4 px-5 py-2 bg-violet-500 text-white font-bold cursor-pointer hover:bg-violet-800 hover:-translate-y-1 transition-all'
        >
          Login
        </button>
        {error ? <p className='text-red-300'>Wrong Credientials</p> : ""}
      </div>
    </div>
  );
}
