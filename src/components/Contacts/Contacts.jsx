import ContactsItem from 'components/ContactsItem/ContactsItem';
import css from './Contacts.module.css';
import propTypes from 'prop-types';

const Contacts = ({ handleDelete, filter, contacts }) => {
  return (
    <>
      <ul className={css.list}>
        {filter
          ? contacts
              .filter(value => value.name.toLowerCase().includes(filter))
              .map(contact => (
                <ContactsItem
                  key={contact.id}
                  handleDelete={handleDelete}
                  name={contact.name}
                  number={contact.number}
                ></ContactsItem>
              ))
          : contacts.map(contact => (
              <ContactsItem
                key={contact.id}
                handleDelete={handleDelete}
                name={contact.name}
                number={contact.number}
              ></ContactsItem>
            ))}
      </ul>
    </>
  );
};
export default Contacts;
Contacts.propTypes = {
  handleDelete: propTypes.func.isRequired,
  filter: propTypes.string,
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
