import { DEFAULT_MODAL_CONTAINER_ID } from '@/utils/constants'
import { PropsWithChildren } from 'react'
import ReactDOM from 'react-dom'

type ModalProps = PropsWithChildren<{
  containerElement: string | Element
  // TODO: have to specify type
  onOk?: (...args: any[]) => any
  onCancel?: (...args: any[]) => any
}>

const Modal = ({ children, containerElement = DEFAULT_MODAL_CONTAINER_ID }: ModalProps) => {
  const container = typeof containerElement === 'string' ? document.getElementById(containerElement) : containerElement

  // make sure there is a container to be rendered.
  if (!container) {
    return null
  }

  return ReactDOM.createPortal(children, container)
}

export default Modal
