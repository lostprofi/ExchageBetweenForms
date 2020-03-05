import React from 'react';
import './_FormOut.scss';

const FormOut = (props) => {
  const prop = props;

  return (
    <form className="formOut">
      <h1>Output form</h1>
      <p>
        First name:
        {` ${prop.text[0].value}`}
      </p>
      <p>
        Last name:
        {` ${prop.text[1].value}`}
      </p>
      <p>
        e-mail:
        {` ${prop.text[2].value}`}
      </p>
      <p>{prop.text[3]}</p>
    </form>
  );
};

export default FormOut;
