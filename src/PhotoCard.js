const PhotoCard = ({ image }) => {
  return (
    <div className="photo-card">
      <img src={image} alt="Memory" />
    </div>
  );
};

export default PhotoCard;