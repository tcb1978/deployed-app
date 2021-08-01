import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Figure from '../figure';
import Modal from '../modal';

const Card = ({ author, img, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div style={{ position: 'relative', zIndex: 1 }} id={isOpen ? 'fadeIn' : 'fadeOut'}>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <Figure className="m-auto text-white col-xs-12 col-sm-10 col-md-6 col-lg-5">
            <img className="img-fluid rounded border border-info" src={img} alt={title} />
            <figcaption className="pt-3">
              <strong>Title:</strong> {title}, <strong>Author:</strong> {author}
            </figcaption>
          </Figure>
        </Modal>
      </div>
      <div
        id="card"
        className="card text-dark mb-3"
        style={{
            maxWidth: '18rem',
            background: 'rgba(249, 84, 21, 1)'
          }}
        >
        <Figure className="text-white p-2 d-grid gap-3">
          <img className="img-thumbnail rounded border border-info" src={img} alt={title} style={{ cursor: 'pointer' }} onClick={() => setIsOpen(true)}/>
          <figcaption>{title}</figcaption>
        </Figure>
      </div>
    </>
  )
};

Card.propTypes = {
  author: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;

