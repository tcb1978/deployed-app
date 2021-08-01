import React from 'react';
import PropTypes from 'prop-types';

const modalStyles = {
  background: 'rgba(0, 0, 0, .8)',
  left: '50%',
  minHeight: '-webkit-fill-available',
  padding: '50px',
  position: 'fixed',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  zIndex: '1000',
};

const overLayStyles = {
  backgroundColor: 'rgba(0, 0, 0, .7)',
  postiton: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 1000,
};

const Modal = ({ isOpen, children, onClose }) => {
  if (!isOpen) {
    return null;
  };
  return (
    <>
      <div style={overLayStyles}></div>
      <aside style={modalStyles}>
        <button className="btn text-white position-fixed bottom-1 start-1" type="button" onClick={onClose}>close</button>
        {children}
      </aside>
    </>
  )
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;

