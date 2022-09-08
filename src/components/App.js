import React from "react";
import './App.css';
import Header from "./header";
import AddContact from './addcontact';
import ContactList from './contactlist';

function App() {

const contacts = [

  {
    id: "1",
    name: "Dispesh",
    email: "malvia@gmail.com",
  },

  {
    id: "2",
    name: "Nikesh",
    email: "hashes@gmail.com",
  },
];

  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts}/>
    </div>

  );
}

export default App;
