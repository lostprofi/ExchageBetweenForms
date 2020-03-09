import React, { useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
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
      <ul className="nav">
        <li className="nav__list">
          <Link to="/" className="nav__link">Home</Link>
        </li>
        <li className="nav__list">
          <Link to="/input" className="nav__link">Input form</Link>
        </li>
        <li className="nav__list">
          <Link to="/output" className="nav__link">Output form</Link>
        </li>
      </ul>
      <div className="container">
        <Switch>
          <Route
            exact
            path="/"
            render={() => <h1 className="header">{header}</h1>}
          />
          <Route path="/input">
            <FormIn onChange={handleChange} onSubmit={handleSubmit} />
          </Route>
          <Route path="/output">
            <FormOut text={form} />
          </Route>
        </Switch>

      </div>
    </div>
  );
};

export default App;
