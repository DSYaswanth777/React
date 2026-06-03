import React, { useState } from "react";

function CustomerForm() {
  const [customer, setCustomer] = useState({ name: "", age: "", phone: "" });

  return (
    <>
      <input
        type="text"
        placeholder="Name"
        value={customer.name}
        onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
      />

      <input
        type="number"
        placeholder="Age"
        value={customer.age}
        onChange={(e) => setCustomer({ ...customer, age: e.target.value })}
      />

      <input
        type="phone"
        placeholder="Phone Number"
        value={customer.phone}
        onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
      />

      <p> Hello, {customer.name}, your age is  {customer.age} and your phone number is  {customer.phone} </p>
    </>
  );
}

export default CustomerForm;
