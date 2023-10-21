import { useState } from 'react';
import shortid from 'shortid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Button, InputForm, LabelForm } from './ContactForm.styled';
import { addContact } from '../../redux/Contact/operations';
import { getContactsValue } from 'redux/Contact/selectors';
import { useSelector, useDispatch } from 'react-redux';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContactsValue);

  const dispatch = useDispatch();
  const id = shortid.generate();

  const createContact = ({ name, number }) => ({
    id: id,
    name,
    number,
  });

  const addContactToState = contact => dispatch(addContact(contact));

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const userName = contacts.find(
      user => user.name.toLocaleLowerCase() === name.toLowerCase()
    );
    if (userName) {
      toast.error(`${name} is already in contacts`, {
        autoClose: 2000,
        position: 'top-center',
        hideProgressBar: false,
        className: 'custom-toast',
        style: {
          background: '#d5eff2',
          color: '#333030',
          border: '1px solid #aaadad',
        },
      });
      reset();
    } else {
      addContactToState(createContact({ name, number }));
      reset();
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <LabelForm>
        Name
        <InputForm
          type="text"
          name="name"
          value={name}
          title="Name may contain only letters"
          required
          onChange={handleInputChange}
        />
      </LabelForm>

      <LabelForm>
        Number
        <InputForm
          type="tel"
          name="number"
          value={number}
          title="Phone may contain only digits"
          required
          onChange={handleInputChange}
        />
      </LabelForm>
      <Button type="submit"> Add contact </Button>
    </Form>
  );
};
