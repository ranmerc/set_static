import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Styles from './ContactForm.module.css';

export default function ContactForm() {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [websiteInput, setWebsiteInput] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [disabled, setDisabled] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    setDisabled(true);

    const toSubmit = {
      name: nameInput,
      email: emailInput,
      website: websiteInput,
      message: messageInput,
    };

    const myPromise = fetch('/api/add/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(toSubmit),
    });

    toast.promise(myPromise, {
      loading: 'Submitting...',
      success: (data) => {
        setDisabled(false);
        if (data.ok) {
          return 'We have received your message!';
        } else {
          throw new Error(data.status);
        }
      },
      error: () => {
        return 'Unable to post, please try again later.';
      },
    });
  };

  const handleInputChange = (e, setState) => {
    setState(e.target.value);
  };

  return (
    <form className={Styles.form} onSubmit={submitHandler}>
      <label>
        <div className={Styles.label}>Name*</div>
        <input
          type="text"
          required
          value={nameInput}
          className={Styles.input}
          onChange={(e) => {
            handleInputChange(e, setNameInput);
          }}
          disabled={disabled}
        />
      </label>
      <label>
        <div className={Styles.label}>Email*</div>
        <input
          type="email"
          required
          value={emailInput}
          className={Styles.input}
          onChange={(e) => {
            handleInputChange(e, setEmailInput);
          }}
          disabled={disabled}
        />
      </label>
      <label>
        <div className={Styles.label}>Website</div>
        <input
          type="url"
          value={websiteInput}
          className={Styles.input}
          onChange={(e) => {
            handleInputChange(e, setWebsiteInput);
          }}
          disabled={disabled}
        />
      </label>
      <label>
        <div className={Styles.label}>Message*</div>
        <textarea
          type="text"
          required
          value={messageInput}
          className={Styles.input}
          onChange={(e) => {
            handleInputChange(e, setMessageInput);
          }}
          disabled={disabled}
        />
      </label>
      <button className={Styles.button} type="submit" disabled={disabled}>
        Submit
      </button>
      <Toaster
        toastOptions={{
          style: {
            fontFamily: `'Inter', sans-serif`,
          },
        }}
      />
    </form>
  );
}
