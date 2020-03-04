import React, { useState } from 'react';
import FormIn from '../FormIn/FormIn';
import FormOut from '../FormOut/FormOut';
import './App.scss';

const App = () => {
  const [formInName, setFormInName] = useState({ value: '' });
  const [formInSecName, setFormInSecName] = useState({ value: '' });
  const [formInMail, setFormInMail] = useState({ value: '' });
  const [header, setHeader] = useState('');
  const [form, setForm] = useState([{ value: '' }, { value: '' }, { value: '' }]);

  const handleChange = (e) => {
    const inputTargetName = e.target.name;
    const inputTargetValue = e.target.value;

    if (inputTargetName === 'FirstName') {
      setFormInName({ value: inputTargetValue });
    } else if (inputTargetName === 'SecondName') {
      setFormInSecName({ value: inputTargetValue });
    } else if (inputTargetName === 'e-mail') {
      setFormInMail({ value: inputTargetValue });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const today = new Date();

    const day = (today.getUTCDate() < 10) ? `0${today.getUTCDate()}` : today.getUTCDate();
    const month = (today.getUTCMonth() < 10) ? `0${today.getUTCMonth() + 1}` : today.getUTCMonth();
    const year = today.getUTCFullYear();

    const date = `${day}.${month}.${year}`;

    setForm([formInName, formInSecName, formInMail, date]);
    setHeader(`Hello, ${formInName.value}!`);
  };

  return (
    <div className="wrapper">
      <h1 className="header">{header}</h1>
      <div className="container">
        <FormIn onChange={handleChange} onSubmit={handleSubmit} />
        <FormOut text={form} />
      </div>
    </div>
  );
};

export default App;
