import React, {useEffect} from 'react';
import styles from './layout.css';
import {setToken, useAppDispatch} from "../../store/store";
import {useDispatch} from "react-redux";
import {useToken} from "../../hooks/useToken";

interface ILayoutProps {
    children?: React.ReactNode;
}

export function Layout({children}: ILayoutProps) {
    const [token] = useToken();

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(setToken(token))
    }, [token])

    return (
        <div className={styles.layout}>
            {children}
        </div>
    );
}
