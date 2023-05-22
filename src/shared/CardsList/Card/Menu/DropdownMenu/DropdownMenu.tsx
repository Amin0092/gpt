import React, {useContext} from 'react';
import {CommentsIcon, HideIcon, SaveIcon, ShareIcon, WarningIcon} from '../../../../Icons';
import styles from './dropdownmenu.css';
import {Text} from '../../../../Text'
import ReactDOM from "react-dom";
import {positionContext} from "../../../../context/positionContext";

interface DropdownMenuProps {
    positionLeft: number,
    positionTop: number

}

export function DropdownMenu() {
    const tablet = window.matchMedia("(min-width: 1024px)").matches && window.matchMedia('(max-width: 1539px)').matches
    console.log(tablet)
    const desktop = window.matchMedia("(min-width: 1540px")
    const positions: object = useContext(positionContext)
    let top: number = Object.values(positions)[0] + 30
    let left: number = Object.values(positions)[1]

    let node = null

    if (typeof document !== 'undefined') {
        node = document.getElementById('dropdown')
    }
    if (!node) return null

    return ReactDOM.createPortal((
            <div className={styles.container} style={{top: top , left: left }}>
                <ul className={styles.listContainer}>
                    <li className={styles.list}>
                        <CommentsIcon/>
                        <Text size={14} desktopSize={16} mobileSize={12}>Комментарии</Text>
                    </li>
                    <li className={styles.list}>
                        <ShareIcon/>
                        <Text size={14} desktopSize={16} mobileSize={12}>Поделиться</Text>
                    </li>
                    <li className={styles.list}>
                        <HideIcon/>
                        <Text size={14} desktopSize={16} mobileSize={12}>Скрыть</Text>
                    </li>
                    <li className={styles.list}>
                        <SaveIcon/>
                        <Text size={14} desktopSize={16} mobileSize={12}>Сохранить</Text>
                    </li>
                    <li className={styles.list}>
                        <WarningIcon/>
                        <Text size={14} desktopSize={16} mobileSize={12}>Пожаловаться</Text>
                    </li>
                </ul>
            </div>
        ), node
    );
}

