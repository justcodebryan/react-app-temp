import { PropsWithChildren } from 'react'

import styles from './styles.module.scss'

type CardProps = PropsWithChildren
const Card = ({ children }: CardProps) => {
  return <div className={styles['card-wrapper']}>{children}</div>
}

export default Card
