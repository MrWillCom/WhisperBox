import React from 'react'
import styles from './Card.module.scss'

interface Props {
  children?: React.ReactNode
}

function Card({ children, ...props }: Props) {
  return <div className={styles.card} {...props}>
    {children}
  </div>
}

export default Card
