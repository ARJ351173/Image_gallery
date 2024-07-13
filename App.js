import React, { useState } from 'react';
import './App.css';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="App">
      <ImageGallery onOpenModal={openModal} />
      {selectedImage && <Modal image={selectedImage} onCloseModal={closeModal} />}
    </div>
  );
}

export default App;