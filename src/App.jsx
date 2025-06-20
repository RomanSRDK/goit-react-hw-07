import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";
import { selectLoading } from "./redux/contactsSlice";
import { BarLoader } from "react-spinners";

function App() {
  const dispatch = useDispatch();
  const loaderSpinner = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts()); //unwrap() => даёт нам доступ к Promise нашей операции
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loaderSpinner ? <BarLoader color="#3fc71e" /> : <ContactList />}
    </>
  );
}

export default App;
