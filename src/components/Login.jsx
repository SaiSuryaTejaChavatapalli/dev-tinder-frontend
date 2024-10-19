import { useState } from "react";
import { login, signup } from "../services/auth";

import { useDispatch } from "react-redux";
import { addUser, setLoading } from "../utils/slices/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const resp = await login(emailId, password);
      dispatch(addUser(resp.data));
      navigate("/");
    } catch (error) {
      console.log("Err", error);
      setError(error?.response?.data || "Something went wrong");
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleSignup = async (e) => {
    try {
      e.preventDefault();
      const resp = await signup({ firstName, lastName, emailId, password });
      dispatch(addUser(resp.data.data));
      return navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form>
      <div className="flex items-center justify-center my-4">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728259200&semt=ais_hybrid"
              alt="Album"
            />
          </figure>
          <div className="card-body flex gap-6">
            <h1 className="card-title">
              {isLoginFormVisible ? "Login" : "Signup"}
            </h1>

            {!isLoginFormVisible ? (
              <>
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input
                    type="text"
                    className="grow"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input
                    type="text"
                    className="grow"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </label>
              </>
            ) : null}
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Email"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <p className="text-red-500">{error}</p>
            {isLoginFormVisible ? (
              <button className="btn btn-success" onClick={handleLogin}>
                Login
              </button>
            ) : (
              <button className="btn btn-success" onClick={handleSignup}>
                SignUp
              </button>
            )}

            <button
              onClick={(e) => {
                e.preventDefault();
                setIsLoginFormVisible((prev) => !prev);
              }}
              className="underline text-blue-800"
            >
              {isLoginFormVisible
                ? "Not a member. Signup?"
                : "Already a member, SignIn?"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
