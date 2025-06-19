import { FaUserAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import styles from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

function Contact({ name, number, id }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className={styles.contactWrapper}>
        <div className={styles.row}>
          <FaUserAlt className={styles.icon} />
          <p className={styles.name}>{name}</p>
        </div>
        <div className={styles.row}>
          <FaPhoneAlt className={styles.icon} />
          <p className={styles.number}>{number}</p>
        </div>
      </div>
      <button
        className={styles.button}
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </button>
    </>
  );
}

export default Contact;
