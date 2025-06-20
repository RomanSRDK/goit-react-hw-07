import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

function ContactList() {
  const contacts = useSelector(selectContacts);
  const findName = useSelector(selectNameFilter);

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
