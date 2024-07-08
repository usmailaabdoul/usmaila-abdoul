'use client';

import { MouseEventHandler } from "react";
import styles from "./standardbutton.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | JSX.Element;
}

export const StandardButton = ({ children, ...props }: Props) => {
  return (
    <button className={styles.standardButton} {...props}>
      {children}
    </button>
  );
};
