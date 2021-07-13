import PropTypes from "prop-types";
import s from "./ContactItem.module.css";

const ContactItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <li className={s.contactItem}>
      {name}:{number}
      <button
        className={s.contactButton}
        type="submit"
        onClick={() => onDeleteContact(id)}
      >
        Delete contact
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
