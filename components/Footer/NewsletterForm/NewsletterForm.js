import Style from './NewsletterForm.module.css';

export default function NewsletterForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className={Style.form}>
      <h1 className={Style.heading}>SUBSCRIBE TO OUR NEWSLETTER</h1>
      <p className={Style.para}>
        Enter your email address to subscribe to our newsletter and receive
        notifications of upcoming events by email.
      </p>
      <label className="visually-hidden" htmlFor="subscribe-email">
        Enter Email
      </label>
      <div className={Style.inputContainer}>
        <input type="email" id="subscribe-email" className={Style.input} />
        <button type="submit" className={Style.button}>
          Subscribe
        </button>
      </div>
    </form>
  );
}
