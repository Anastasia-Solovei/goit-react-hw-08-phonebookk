import React from "react";
import s from "./Views.module.css";

export default function LogInView() {
  return (
    <div className={s.Container}>
      <h2 className={s.FormHeader}>Log In page</h2>
      <form
      //</div>onSubmit={handleSubmit}
      >
        <label className={s.FormInput}>
          Email
          <input
            type="email"
            name="email"
            //value={email}
            //onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>

        <label className={s.FormInput}>
          Password
          <input
            type="password"
            name="password"
            //value={password}
            //onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>

        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
