import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import toast from 'react-hot-toast';
import styles from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(() => toast.success('Registration successful'))
      .catch(err => toast.error(`Registration failed: ${err}`));
    actions.resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string().min(3).required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6).required('Required'),
  });

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label className={styles.label}>
          Name
          <Field className={styles.input} name="name" type="text" placeholder="Enter your name here"/>
          <ErrorMessage name="name" component="div" className={styles.error} />
        </label>

        <label className={styles.label}>
          Email
          <Field className={styles.input} name="email" type="email" placeholder="Enter your email here"/>
          <ErrorMessage name="email" component="div" className={styles.error} />
        </label>

        <label className={styles.label}>
          Password
          <Field className={styles.input} name="password" type="password" placeholder="Enter your password here"/>
          <ErrorMessage name="password" component="div" className={styles.error} />
        </label>

        <button type="submit" className={styles.button}>Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
