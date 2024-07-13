import React from 'react';
import PropTypes from 'prop-types';
import '../App.css'; 

const Modal = ({ image, onCloseModal }) => {
  const closeModal = (e) => {
    e.stopPropagation();
    onCloseModal(); 
  };

  return (
    <div className="modal-overlay" onClick={onCloseModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={closeModal}>
          <span>&times;</span> {/* X sign */}
        </button>
        <img src={image.url} alt={image.title} className="modal__image" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default Modal;