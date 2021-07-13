import PropTypes from "prop-types";
import ContactItem from "../ContactItem";

const ContactList = ({ findContact, onDeleteContact }) => {
  return (
    <ul>
      {findContact().map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  findContact: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
