import React from 'react';
import './_FormIn.scss';

const FormIn = (props) => {
  const prop = props;

  return (
    <form className="formIn" onSubmit={prop.onSubmit}>
      <h1>Input form</h1>
      <input
        className="formIn__input"
        name="FirstName"
        type="text"
        placeholder="First name"
        onChange={prop.onChange}
        value={prop.value}
        required
      />
      <input
        className="formIn__input"
        name="SecondName"
        type="text"
        placeholder="Second name"
        onChange={prop.onChange}
        value={prop.value}
        required
      />
      <input
        className="formIn__input"
        name="e-mail"
        type="e-mail"
        placeholder="e-mail"
        onChange={prop.onChange}
        value={prop.value}
        required
      />
      <input
        className="formIn__input formIn__input_submit"
        type="submit"
        value="Submit"
      />
    </form>
  );
};
export default FormIn;
