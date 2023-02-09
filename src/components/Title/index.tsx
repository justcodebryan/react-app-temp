import { PropsWithChildren } from 'react'

type TitleProps = PropsWithChildren<{
  level?: 1 | 2 | 3 | 4
}>

const Title = ({ level, children }: TitleProps) => {
  return <div>{children}</div>
}

export default Title
