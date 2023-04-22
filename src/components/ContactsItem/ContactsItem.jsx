import css from './ContactsItem.module.css';
import propTypes from 'prop-types';
const ContactsItem = ({ number, name, handleDelete }) => {
  return (
    <li className={css.item}>
      <span>
        {name}: {number}
      </span>
      <button type="button" onClick={handleDelete} name={name}>
        Delete
      </button>
    </li>
  );
};
export default ContactsItem;
ContactsItem.propTypes = {
  number: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  handleDelete: propTypes.func.isRequired,
};
