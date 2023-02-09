import { PropsWithChildren } from 'react'

type ColProps = PropsWithChildren

const Col = ({ children }: ColProps) => {
  return <div>{children}</div>
}

export default Col
