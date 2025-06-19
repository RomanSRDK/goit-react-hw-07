import { useId } from "react";
import { useDispatch } from "react-redux";
import { findContact } from "../../redux/filtersSlice";
import styles from "./SearchBox.module.css";

function SearchBox() {
  const dispatch = useDispatch();
  const id = useId();

  const handleChange = (e) => {
    const inputValue = e.target.value;
    dispatch(findContact(inputValue.trim()));
  };

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={id}>
        Find contacts by name
      </label>
      <input
        onChange={handleChange}
        className={styles.input}
        type="text"
        id={id}
      />
    </div>
  );
}

export default SearchBox;
