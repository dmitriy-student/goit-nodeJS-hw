const Contacts = require("./contacts");
const { program } = require("commander");

program
  .option("-a, --action <action>", "Action to invoke")
  .option("-i, --id <id>", "Contact ID")
  .option("-n, --name <name>", "Name")
  .option("-e --email <email>", "Email")
  .option("-p --phone <phone>", "Phone number");

program.parse(process.argv);

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = Contacts.listContacts();
      return contacts;

    case "get":
      const contact = Contacts.getContactById(id);
      return contacts;

    case "add":
      const newContact = Contacts.addContact(name, email, phone);
      return newContact;

    case "remove":
      const removeContact = Contacts.removeContact(id);
      return removeContact;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

const options = program.opts();

invokeAction(options).then(console.log).catch(console.log);
