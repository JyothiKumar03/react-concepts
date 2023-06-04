// one can add extra input feilds in the form
import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

/*
handleChange function:
-This function is responsible for updating the formData state based on the user's input in the form fields.
-It takes an event object e as a parameter, which represents the event triggered by the input field.
-Using destructuring assignment, it extracts the name and value properties from the event's target element (the input field that triggered the event).
-The name property is the name attribute of the input field, and the value property is the current value entered by the user.
-The setFormData function, provided by the useState hook, is called with a callback that takes the previous formData state as a parameter.
-Inside the callback, the spread operator is used to create a new object with the previous formData values, and the name property is updated with the new value.
-Finally, the updated formData object is set as the new state using setFormData.

handleSubmit function:
-This function is called when the form is submitted.
-It takes an event object e as a parameter, which represents the submit event.
-The e.preventDefault() method is called to prevent the default form submission behavior, which would cause the page to reload.
-The formData object is logged to the console using console.log(formData), displaying the form data entered by the user.

*/
