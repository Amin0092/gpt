import React from 'react';
import { CommentsIcon, HideIcon, SaveIcon, ShareIcon, WarningIcon } from '../../../../Icons';
import styles from './dropdownmenu.css';
import {Text} from '../../../../Text'
interface IDropdownMenu {
  postId: string
}

export function DropdownMenu({ postId }: IDropdownMenu) {
  return (
    <div className={styles.container}>
      <ul className={styles.listContainer}>
        <li className={styles.list}>
          <CommentsIcon/>
          <Text size={14}  desktopSize={16} mobileSize={12}>Комментарии</Text>
        </li>
        <li className={styles.list}>
          <ShareIcon />
          <Text size={14} desktopSize={16} mobileSize={12}>Поделиться</Text>
        </li>
        <li className={styles.list} >
          <HideIcon />
          <Text size={14} desktopSize={16} mobileSize={12}>Скрыть</Text>
        </li>
        <li className={styles.list}>
          <SaveIcon />
          <Text size={14} desktopSize={16} mobileSize={12}>Сохранить</Text>
        </li>
        <li className={styles.list}>
          <WarningIcon />
          <Text size={14} desktopSize={16} mobileSize={12}>Пожаловаться</Text>
        </li>
      </ul>
    </div>
  );
}

