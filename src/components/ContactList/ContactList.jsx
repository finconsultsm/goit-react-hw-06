import sc from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.filter.query);
  const dispatch = useDispatch();

  let normalizedFilter = filter.toLowerCase();
  const filtredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const handleRemoveContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={sc.contactList}>
      {filtredContacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          handleRemoveContact={handleRemoveContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
