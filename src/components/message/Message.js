import "./message.css";
import prflPic from "../../assets/prflPic.png";

const Message = ({ message, user }) => {
  const { text, uid, photoURL } = message;
  const messageClass = uid === user.uid ? "sent" : "recieve";
  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL ? photoURL : prflPic} alt="" />
      <p>{text}</p>
    </div>
  );
};

export default Message;
