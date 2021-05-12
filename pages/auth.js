import "../configureAmplify";
import { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Profile from "../components/Profile";
import ForgotPassword from "../components/ForgotPassword";
import ForgotPasswordSubmit from "../components/ForgotPasswordSubmit";
import ConfirmSignUp from "../components/ConfirmSignUp";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [uiState, setUiState] = useState(null);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    authCode: "",
  });
  const [valid, setValid] = useState(true);
  const [checkPass, setCheckPass] = useState(true);

  const { email, password, authCode } = formState;

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    console.log("checking user...");
    try {
      setUiState("loading");
      await Auth.currentAuthenticatedUser();
      setUiState("signedIn");
    } catch (err) {
      setUiState("signIn");
    }
  }

  function onChange(e) {
    if (e.target.name === "email" && !isEmail(e.target.value)) {
      setValid(false);
      return;
    }
    if (e.target.name === "password" && isEmpty(e.target.value)) {
      // console.log("Please Enter Valid Email Id");
      setCheckPass(false);
      return;
    }
    setValid(true);
    setCheckPass(true);
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  async function signUp() {
    if (email == "" && password == "") {
      return toast.error("Please enter email and password");
    }
    if (!valid || email == "") {
      return toast.error("Please enter a valid email");
    }
    if (!checkPass || password == "") {
      return toast.error("Please enter the password");
    }
    try {
      await Auth.signUp({ username: email, password, attributes: { email } });
      setUiState("confirmSignUp");
    } catch (err) {
      toast.error(err.message);
      // console.log(err);
    }
  }

  async function confirmSignUp() {
    if (authCode == "") {
      toast.error("Invalid verification code provided, please try again.");
    }
    try {
      await await Auth.confirmSignUp(email, authCode);
      await Auth.signIn(email, password);
      setUiState("signedIn");
    } catch (err) {
      toast.error(err.message);
      // console.log({ err });
    }
  }

  async function signIn() {
    if (email == "" && password == "") {
      return toast.error("Please enter email and password");
    }
    if (!valid || email == "") {
      return toast.error("Please enter a valid email");
    }
    if (!checkPass || password == "") {
      return toast.error("Please enter the password");
    }
    try {
      await Auth.signIn(email, password);
      setUiState("signedIn");
    } catch (err) {
      toast.error(err.message);
      // console.log("error signing in", err);
    }
  }

  async function forgotPassword() {
    try {
      await Auth.forgotPassword(email);
      setUiState("forgotPasswordSubmit");
    } catch (err) {
      toast.error(err.message);
      // console.log({ err });
    }
  }

  async function forgotPasswordSubmit() {
    try {
      await Auth.forgotPasswordSubmit(email, authCode, password);
      setUiState("signIn");
    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <div className="flex items-center mx-auto">
      <div className=" ">
        <ToastContainer />
        {!uiState ||
          (uiState === "loading" && <p className="font-bold">Loading ...</p>)}
        {uiState === "signedIn" && (
          <Profile setUiState={setUiState} onChange={onChange} />
        )}
        {uiState === "signUp" && (
          <SignUp setUiState={setUiState} onChange={onChange} signUp={signUp} />
        )}
        {uiState === "confirmSignUp" && (
          <ConfirmSignUp
            setUiState={setUiState}
            onChange={onChange}
            confirmSignUp={confirmSignUp}
          />
        )}
        {uiState === "signIn" && (
          <SignIn setUiState={setUiState} onChange={onChange} signIn={signIn} />
        )}
        {uiState === "forgotPassword" && (
          <ForgotPassword
            setUiState={setUiState}
            onChange={onChange}
            forgotPassword={forgotPassword}
          />
        )}
        {uiState === "forgotPasswordSubmit" && (
          <ForgotPasswordSubmit
            setUiState={setUiState}
            onChange={onChange}
            forgotPasswordSubmit={forgotPasswordSubmit}
          />
        )}
      </div>
    </div>
  );
}

export default App;
