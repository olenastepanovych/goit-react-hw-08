import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import toast from 'react-hot-toast';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, actions) => {
    const normalizedName = values.name.toLowerCase();
    const normalizedNumber = values.number;
    const isDuplicate = contacts.some(
      contact =>
        contact.name.toLowerCase() === normalizedName ||
        contact.number === normalizedNumber
    );

    if (isDuplicate) {
      toast.error(`${values.name} or number is already in contacts.`);
      return;
    }

    dispatch(addContact(values))
      .unwrap()
      .then(() => toast.success(`${values.name} added`))
      .catch(err => toast.error(`Error: ${err}`));
    actions.resetForm();
  };

  const schema = Yup.object({
    name: Yup.string().min(3).required('Name is required'),
    number: Yup.string().min(3).required('Number is required'),
  });

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label className={styles.label}>
          Name
          <Field className={styles.input} name="name" />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </label>
        <label className={styles.label}>
          Number
          <Field className={styles.input} name="number" />
          <ErrorMessage name="number" component="div" className={styles.error} />
        </label>
        <button type="submit" className={styles.button}>Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;