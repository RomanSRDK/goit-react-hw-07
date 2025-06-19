import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import styles from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { addContact } from "../../redux/contactsSlice";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("name must be at least 3 characters")
    .min(3)
    .max(50),
  number: Yup.string()
    .required("number must be at least 7 characters")
    .min(7)
    .max(7),
});

function ContactForm() {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const emailFieldId = useId();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    const formattedName = values.name
      .toLowerCase()
      .split("")
      .map((char, index) => (index === 0 ? char.toUpperCase() : char))
      .join("");
    const formattedNumber = values.number.replace(
      /(\d{3})(\d{2})(\d{2})/,
      "$1-$2-$3"
    );

    dispatch(
      addContact({ name: formattedName, number: formattedNumber, id: nanoid() })
    );

    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <div className={styles.fieldGroup}>
            <label htmlFor={nameFieldId} className={styles.label}>
              Name
            </label>
            <Field
              id={nameFieldId}
              name="name"
              type="text"
              className={styles.input}
            />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.error}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor={emailFieldId} className={styles.label}>
              Number
            </label>
            <Field
              id={emailFieldId}
              name="number"
              type="text"
              className={styles.input}
            />
            <ErrorMessage
              name="number"
              component="div"
              className={styles.error}
            />
          </div>

          <button type="submit" className={styles.button}>
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
}

export default ContactForm;
