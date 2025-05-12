import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import toast from 'react-hot-toast';
import styles from './Contact.module.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    const confirmed = window.confirm(`Delete ${contact.name}?`);
    if (!confirmed) return;

    dispatch(deleteContact(contact.id))
      .unwrap()
      .then(() => toast.success(`${contact.name} deleted`))
      .catch(err => toast.error(`Error: ${err}`));
  };

  return (
    <li className={styles.item}>
      <div className={styles.info}>
        <span className={styles.text}>
          <FaUser className={styles.icon} size={20} /> {contact.name}
        </span>
        <span className={styles.text}>
          <FaPhoneAlt className={styles.icon} size={20} /> {contact.number}
        </span>
      </div>
      <button className={styles.button} onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default Contact;

