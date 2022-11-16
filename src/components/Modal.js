import React from "react";
import ReactDOM from "react-dom";
import styles from "../css/Modal.module.css";

const Modals = ({ setIsOpen, setShow, body, header, link }) => {
  return (
    <>
      <div
        className={styles.darkBG}
        onClick={() => {
          setIsOpen(false);
          setShow(false);
        }}
      />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>{header}</h5>
          </div>

          <hr />
          <div className={`md:text-lg ${styles.modalContent}`}>{body}</div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button href={link} className={styles.linkBtn}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  Learn More
                </a>
              </button>
              <button
                href={link}
                className={styles.cancelBtn}
                onClick={() => {
                  setIsOpen(false);
                  setShow(false);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
function Modal(props) {
  return ReactDOM.createPortal(
    <Modals {...props} />,
    document.querySelector("#modal")
  );
}

export default Modal;
