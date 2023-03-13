import React from "react";
import Image from "next/image";
import {signIn} from 'next-auth/client'
function Login() {
  return (
    <div className="grid place-items-center">
      <Image
        src="https://links.papareact.com/5me"
        width={200}
        height={200}
        layout="fixed"
        alt="fb-logo"
      />
      <h1  onClick={signIn}className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer">
        Login Using FaceBoook
      </h1>
    </div>
  );
}

export default Login;
