import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import van from "../assets/images/background/login.jpg";
import { AiOutlineWarning } from "react-icons/ai";

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const location = useLocation();
  console.log(location);

  const handleChange = (e) => {
    const { name, value } = e.target;

    /**
     * note:
     * The use of square brackets [name] within the object literal
     * is a way to dynamically set a property key in JavaScript.
     * This is often used when you want to update an object's property
     * based on a variable (in this case, the name attribute of the input field).
     */

    setLoginFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    console.log(e.target.value);
  };

  return (
    <div className="login-section">
      <img className="login-image" src={van} alt="" />
      <div className="login-container">
        <h1>Sign in to your account</h1>
        <form className="login-form">
          <input
            name="email"
            type="email"
            onChange={handleChange}
            placeholder="Email address"
            value={loginFormData.email}
          />
          <input
            name="password"
            type="password"
            onChange={handleChange}
            placeholder="Password"
            value={loginFormData.password}
          />
          <button>Log in</button>
        </form>
        {location.state?.message ? (
          <p className="login-first fade-in ">
            <AiOutlineWarning className="inline text-lg mb-[4px] mx-1" />
            {location.state.message}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Login;
