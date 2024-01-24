import React from "react";
import Card from "./Card";
import Contacts from "./Contacts";
// import Details from "./Details";
import Avatar from "./Avatar";

function CreateCard(contact) {
  return (
    <Card
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}
function App() {
  return (
    <div>
      <h1>My Contacts </h1>
      <Avatar img="https://img.freepik.com/free-photo/natures-beauty-captured-colorful-flower-close-up-generative-ai_188544-8593.jpg?size=626&ext=jpg&ga=GA1.1.1688370710.1705952639&semt=ais" />
      {Contacts.map(CreateCard)}

      {/* <Card
        name={Contacts[0].name}
        img={Contacts[0].imgURL}
        tel={Contacts[0].phone}
        email={Contacts[0].email}
      />

      <Card
        name={Contacts[1].name}
        img={Contacts[1].imgURL}
        tel={Contacts[1].phone}
        email={Contacts[1].email}
      />
      <Card
        name={Contacts[2].name}
        img={Contacts[2].imgURL}
        tel={Contacts[2].phone}
        email={Contacts[2].email}
      /> */}
      {/* <Details information={Contacts[2].name} /> */}
    </div>
  );
}
export default App;
