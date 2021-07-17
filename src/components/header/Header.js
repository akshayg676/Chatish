import "./header.css";
import Logo from "../../assets/chat_logo.png";
import Logout from "../../assets/logout.png";

const Header = ({ auth, user }) => {
  return (
    <div className="header">
      <img className="logo" src={Logo} alt="" />
      {user && (
        <img
          className="logout"
          src={Logout}
          alt=""
          onClick={() => auth.signOut()}
        />
      )}
    </div>
  );
};

export default Header;
