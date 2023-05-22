import { Dispatch, SetStateAction } from 'react'
import styles from './Modal.module.scss'

interface IModalProps {
    active: boolean
    setActive: Dispatch<SetStateAction<boolean>>
}

function Modal({active, setActive}: IModalProps) {
  return (
    <div className={styles.modal} onClick={() => setActive(false)}>
        <div className={styles.content}>
            
        </div>
    </div>
  )
}

export default Modal
