import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const ImageGallery = ({ onOpenModal }) => {
  const images = [
    { url: '/images/image2.jpg', title: 'Image 2' },
    { url: '/images/image3.jpg', title: 'Image 3' },
    { url: '/images/image4.jpg', title: 'Image 4' },
    { url: '/images/image5.jpg', title: 'Image 5' },
    { url: '/images/image7.jpg', title: 'Image 7' },
    { url: '/images/image8.jpg', title: 'Image 8' },
    { url: '/images/image9.jpg', title: 'Image 9' },
    { url: '/images/image10.jpg', title: 'Image 10' },
    { url: '/images/image11.jpg', title: 'Image 11' },
    { url: '/images/image12.jpg', title: 'Image 12' },
    { url: '/images/image13.jpg', title: 'Image 13' },
    { url: '/images/image14.jpg', title: 'Image 14' },
    { url: '/images/image15.jpg', title: 'Image 15' },
    { url: '/images/image16.jpg', title: 'Image 16' },
    { url: '/images/image17.jpg', title: 'Image 17' },
    { url: '/images/image19.jpg', title: 'Image 19' },
    { url: '/images/image21.jpg', title: 'Image 21' },
    { url: '/images/image22.jpg', title: 'Image 22' },
    { url: '/images/image23.jpg', title: 'Image 23' },
    { url: '/images/image24.jpg', title: 'Image 24' },
  ];

  const handleKeyDown = (event, image) => {
    if (event.key === 'Enter') {
      onOpenModal(image);
    }
  };

  return (
    <div className="image-gallery">
      {images.map(({ url, title }, index) => (
        <div
          key={index}
          className="image-gallery__item"
          onClick={() => onOpenModal({ url, title })}
          onKeyDown={(event) => handleKeyDown(event, { url, title })}
          tabIndex="0"
          role="button"
          aria-label={`Open modal for ${title}`}
        >
          <img src={url} alt={title} />
        </div>
      ))}
    </div>
  );
};

ImageGallery.propTypes = {
  onOpenModal: PropTypes.func.isRequired,
};

export default ImageGallery;