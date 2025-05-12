import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import toast from 'react-hot-toast';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values))
      .unwrap()
      .then(() => toast.success('Login successful'))
      .catch(err => toast.error(`Login failed: ${err}`));
    actions.resetForm();
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6).required('Required'),
  });

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
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

        <button type="submit" className={styles.button}>Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
