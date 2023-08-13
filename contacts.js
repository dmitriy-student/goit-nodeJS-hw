const fs = require("node:fs/promises");
const path = require("node:path");
const crypto = require("node:crypto");

const CONTACTS_PATH = path.join(__dirname, "db", "contacts.json");

async function read() {
  const data = await fs.readFile(CONTACTS_PATH, "utf-8");

  return JSON.parse(data);
}

function write(data) {
  return fs.writeFile(CONTACTS_PATH, JSON.stringify(data, null, 2));
}

// TODO: задокументировать каждую функцию
async function listContacts() {
  const data = read();

  return data;
}

async function getContactById(contactId) {
  const data = await read();
  const index = data.findIndex((contact) => concatct.id === contactId);

  if (index === -1) {
    return null;
  }

  return data[index];
}

async function removeContact(contactId) {
  const data = await read();
  const index = data.findIndex((contact) => concatct.id === contactId);

  if (index === -1) {
    return null;
  }

  const newData = [...data.slice(0, index), ...data.slice(index + 1)];

  await write(newData);

  return data[index];
}

async function addContact(name, email, phone) {
  const data = await read();
  const newContact = { id: crypto.randomUUID(), name, email, phone };
  const newData = [...data, newContact];

  await write(newData);

  return newContact;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
