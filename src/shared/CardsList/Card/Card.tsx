import React from 'react';
import styles from './card.css';
import { Menu } from './Menu';
import { Preview } from './Preview';
import { TextContent } from './TextContent/TextContent';
import { Controls } from './Controls/Controls';

interface ICardProps {
  cardContent: object;
}

export function Card(cardContent : ICardProps ) {
  
  return (
    <li className={styles.card}>
      <TextContent />
      <Preview />
      <Menu />
      <Controls />
    </li>
  )
}
