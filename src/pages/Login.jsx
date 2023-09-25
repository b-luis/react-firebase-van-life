import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import van from "../assets/images/background/login.jpg";
import { AiOutlineWarning } from "react-icons/ai";
import { loginUser } from "../api";

/**
 * Challenge: Code the sad path 🙁
 * 3. Add a `status` state and default it to "idle". When the
 *    login form begins submitting, set it to "submitting". When
 *    it's done submitting and the data has come back, set it
 *    to "idle" again
 * 4. Disable the button when the `status` state is "submitting"
 *    (this may require some Googling if you haven't done this
 *    before).
 * 5. Add an `error` state and default it to `null`. When the
 *    form is submitted, reset the errors to `null`. If there's
 *    an error from `loginUser` (add a .catch(err => {...}) in
 *    the promise chain), set the error to the error that
 *    comes back.
 * 6. Display the error.message below the `h1` if there's ever
 *    an error in state
 */

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    /**
     * NOTE:
     * By wrapping setStatus("idle") in a function inside the finally block,
     * you ensure that it only gets executed after the asynchronous operations
     * in the try block (and any potential catch block) have completed.
     * This way, the status state is updated appropriately based on the actual outcome of the login operation
     */
    e.preventDefault();
    setStatus("submitting");
    loginUser(loginFormData)
      .then((data) => {
        setError(null);
        navigate("/host");
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setStatus("idle");
      });
  };

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
  };

  return (
    <div className="login-section">
      <img className="login-image" src={van} alt="" />
      <div className="login-container">
        {error?.message && (
          <h3 className="login-first fade-in">{error?.message}</h3>
        )}
        <h1>Sign in to your account</h1>
        <form onSubmit={handleSubmit} className="login-form">
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
          <button disabled={status === "submitting"}>
            {status === "submitting" ? "Logging in..." : "Log in"}
          </button>
        </form>
        {location.state?.message && (
          <p className="login-first fade-in ">
            <AiOutlineWarning className="inline text-lg mb-[4px] mx-1" />
            {location.state.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
