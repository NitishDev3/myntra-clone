import React from "react";

const Login = () => {
  return (
    <div className="w-1/4 h-[82vh] mx-auto my-7 bg-white">
      <div>
        <img
          src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/1/25/f5e9a029-33c3-4a92-811b-ef7917fe6d441674670210687-offer-banner-300-600x240-code-_-MYNTRA300.jpg"
          alt=""
        />
      </div>
      <div className="w-10/12 mx-auto">
        <h2 className="font-semibold text-xl my-6">Login <apan className="font-normal">or</apan> Signup</h2>
        <input
          type="text"
          placeholder="+91"
          value="+91"
          disabled
          className="w-2/12 border border-r-0 border-gray-500 my-3 p-2"
        />
        <input
          type="text"
          placeholder="Mobile Number"
          className="border border-l-0 border-gray-500 focus:border-e p-2 my-3 w-10/12"
        />
        <p className="text-xs my-3">By continuing, I agree to the <span>Terms of Use</span> & <span>Privacy Policy</span></p>
        <button className="bg-[#ff3f6c] p-2 w-full my-3 text-white">Continue</button>
        <p className="text-xs my-3">Have trouble logging in?<span>Get help</span></p>
      </div>
    </div>
  );
};

export default Login;
