import { PropsWithChildren } from 'react'

type RowProps = PropsWithChildren

const Row = ({ children }: RowProps) => {
  return <>{children}</>
}

export default Row
