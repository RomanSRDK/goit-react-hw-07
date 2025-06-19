import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const findName = useSelector((state) => state.filter.name);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().startsWith(findName.toLowerCase())
  );

  return (
    <ul className={styles.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          <Contact name={name} number={number} id={id} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
