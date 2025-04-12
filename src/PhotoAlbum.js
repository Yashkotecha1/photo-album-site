import React from 'react';
import './PhotoAlbum.css';

const images = [
  'https://raw.githubusercontent.com/Yashkotecha1/photo-album-images/main/image/b1.jpg',
  'https://raw.githubusercontent.com/Yashkotecha1/photo-album-images/main/image/b2.jpg',
  'https://raw.githubusercontent.com/Yashkotecha1/photo-album-images/main/image/b3.jpg',
];

const PhotoAlbum = () => {
  return (
    <div className="album-container">
      {images.map((img, index) => (
        <div className="photo-page" key={index}>
          <img src={img} alt="Wedding" className="album-img" />
        </div>
      ))}
    </div>
  );
};

export default PhotoAlbum;
