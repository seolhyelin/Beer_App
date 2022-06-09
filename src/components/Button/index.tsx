import { ReactNode } from 'react';

import styles from './button.module.scss';

interface Props {
  children: ReactNode;
}

const Button = ({ children }: Props) => {
  return (
    <button type='button' className={styles.buttonComponent}>
      {children}
    </button>
  );
};

export default Button;
