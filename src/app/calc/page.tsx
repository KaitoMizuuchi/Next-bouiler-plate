import React from 'react';
import styles from './calc.module.scss';

const page = () => {
  return (
    <div className={styles.calc_wrapper}>
      <div className={styles.calc_container}>
        <label htmlFor="todo">
          ToDo:
          <input type="text" id="todo" className={styles.calc_input_field} />
        </label>
      </div>
    </div>
  );
};

export default page;
