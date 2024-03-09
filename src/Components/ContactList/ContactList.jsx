
import Contact from "../Contact/Contact";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
