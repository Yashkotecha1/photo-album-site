import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import './WeddingAlbum.css';

const WeddingAlbum = () => {
  const imageUrls = [];

  for (let i = 1; i <= 400; i++) {
    imageUrls.push(`https://raw.githubusercontent.com/Yashkotecha1/photo-album-images/main/image/${i}.JPG`);
  }

  return (
    <div className="album-container">
      <h1 className="title">Mohit & Sheetal Wedding Album</h1>

      <HTMLFlipBook width={500} height={700} className="flip-book">
        {imageUrls.map((url, index) => (
          <div className="page" key={index}>
            <img src={url} alt={`img${index}`} />
          </div>
        ))}

        <div className="page last-page">
          <h2>Thank You!</h2>
          <p>With Love from Mohit & Sheetal ❤️</p>
        </div>
      </HTMLFlipBook>
    </div>
  );
};

export default WeddingAlbum;
