import { Component } from 'react';
import styles from './modal.module.css';
import { createPortal} from 'react-dom';

const modalRoot = document.getElementById("modal-root");

class Modal extends Component {
    componentDidMount(){
        document.addEventListener("keydown",this.closeModal)
    }
    componentWillUnmount(){
        document.removeEventListener("keydown",this.closeModal)
    }
    closeModal =(e) =>{
        const {close} = this.props

        if(e.code === "Escape"){
            close()
            return
        }
        if(e.target === e.currentTarget){
            close()
        }

    }
    render(){
    const {children}= this.props;
    const {closeModal}= this;
    return createPortal(
    <div className={styles.overlay} onClick={closeModal}>
        <div className={styles.modal}>
            <span onClick={closeModal} className={styles.close}>X</span>
            {children}
        </div>
    </div>,
    modalRoot
    )
}
};

export default Modal;