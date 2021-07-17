import "./signin.css";
import Google from "../../assets/Google__G__Logo.svg";
import firebase from "firebase/app";

export default function Signin({ auth }) {
  const signInWithGoogle = (e) => {
    e.preventDefault();
    var provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <div>
      <p>Sign in to start chat....</p>
      <button className="signinButton" onClick={signInWithGoogle}>
        <img className="signinLogo" src={Google} alt="" />
        <span className="signinText">Sign in with google</span>
      </button>
    </div>
  );
}
