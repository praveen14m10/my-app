import React from "react";
import './App.css';
import Header from "./Header";
import AddContacts from "./AddContacts";
import ContactList from "./ContactList";

function App() {
  return (
    <div className="ui container">
      <Header />
      <AddContacts/>
      <ContactList/>
    </div>
  );
}

export default App;
