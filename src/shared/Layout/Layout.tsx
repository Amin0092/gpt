import React from 'react';
import styles from './layout.css';
import {setToken} from "../../store";
import {useDispatch} from "react-redux";
import {useToken} from "../../hooks/useToken";

interface ILayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children} : ILayoutProps) {
  const [token] = useToken();

  const dispatch = useDispatch()
  dispatch(setToken(token) )

  return (
    <div className={styles.layout}>
      {children}
    </div>
  );
}
