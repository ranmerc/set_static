import Style from './NewsletterForm.module.css';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';

export default function NewsletterForm() {
  const [input, setInput] = useState('');
  const [disabled, setDisabled] = useState(false);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setDisabled(true);

    const toSubmit = {
      email: input,
    };

    const myPromise = fetch('/api/add/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(toSubmit),
    });

    toast.promise(myPromise, {
      loading: 'Submitting',
      success: (data) => {
        setDisabled(false);
        if (data.ok) {
          return 'You are now subscribed';
        } else {
          throw new Error(data.status);
        }
      },
      error: () => {
        return 'Unable to add, please try again later';
      },
    });
  };

  return (
    <form onSubmit={submitHandler} className={Style.form}>
      <h1 className={Style.heading}>SUBSCRIBE TO OUR NEWSLETTER</h1>
      <p className={Style.para}>
        Enter your email address to subscribe to our newsletter and receive
        notifications of upcoming events by email.
      </p>
      <label className="visually-hidden" htmlFor="subscribe-email">
        Enter Email
      </label>
      <div className={Style.inputContainer}>
        <input
          type="email"
          id="subscribe-email"
          required
          className={Style.input}
          value={input}
          onChange={inputHandler}
          disabled={disabled}
        />
        <button type="submit" className={Style.button} disabled={disabled}>
          Subscribe
        </button>
      </div>
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
