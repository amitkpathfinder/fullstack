import React, {useEffect} from 'react'
import ReactDOM from 'react-dom';
import Button from '../components/button'
import style from './style.module.css'

export const Modal = (props) => {

    const {open, onClose, children} = props;

    useEffect(() => {
        const close = (e) => {
          if(e.keyCode === 27){
            onClose()
          }
        }
        window.addEventListener('keydown', close)
      return () => window.removeEventListener('keydown', close)
    },[])

    if(!open) return null

    return ReactDOM.createPortal(
        <>
            <div className={style.overlay} onClick={onClose}></div>
            <div className={style.modal}>
                <Button text={"On Close"} onClick={onClose}/>
                {children}
                <Button text={"Cancel"} onClick={onClose}/>
            </div>
        </>,
        document.getElementById('portal')
    )
}
