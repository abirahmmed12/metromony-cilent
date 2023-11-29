import React from 'react';
import { Carousel, Button } from 'antd';
import { Link } from 'react-router-dom';

const contentStyle = {
  height: '500px',
  color: '#fff',
  textAlign: 'center',
  background: '#364d79',
  position: 'relative',
};

const imageStyle = {
  width: '100%',
  maxHeight: '500px',
};

const textOverlayStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '10px',
  fontSize: '24px',
  fontWeight: 'bold',
};

const buttonStyle = {
  position: 'absolute',
  top: '180px',
  left: '50%',
  transform: 'translateX(-50%)',
};

const mobileContentStyle = {
  height: '300px',
};

const mobileImageStyle = {
  maxHeight: '300px',
};

const mobileButtonStyle = {
  position: 'absolute',
  bottom: '20px',
  left: '50%',
  transform: 'translateX(-50%)',
};

const images = [
  {
    src: 'https://i.ibb.co/8K9m9Wt/Win-A-Gorgeous-Photo-Book-from-My-Publisher.jpg',
    text: ' Matrimony Made Magical with SoulMateSearch',
  },
  {
    src: 'https://i.ibb.co/v3NwdHh/Photo-album-Wedding-album.jpg',
    text: ' Start Your Journey to Happily Ever After with SoulMateSearch.',
  },
  {
    src: 'https://i.ibb.co/hKL6zqD/Heirloom-Wedding-Album.jpg',
    text: 'Your Perfect Match Awaits on SoulMateSearch',
  },
  {
    src: 'https://i.ibb.co/yX8PXzb/download.jpg',
    text: ' Begin Your Love Story with SoulMateSearch.',
  },
];

const Banner = () => {
  return (
    <Carousel autoplay autoplaySpeed={500}>
      {images.map((image, index) => (
        <div key={index}>
          <h3 style={{
            ...contentStyle,
            ...(window.innerWidth <= 768 ? mobileContentStyle : {}),
          }}>
            <img src={image.src} alt="" style={{
              ...imageStyle,
              ...(window.innerWidth <= 768 ? mobileImageStyle : {}),
            }} />
            <div style={textOverlayStyle} className="text-white text-center">
              <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
                {image.text}
              </h2>
             <Link to={'/login'}> <Button  className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-[#7a8474] text-white" style={{
                ...buttonStyle,
                ...(window.innerWidth <= 768 ? mobileButtonStyle : {}),
              }} type="primary">Join Now</Button></Link>
            </div>
          </h3>
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
