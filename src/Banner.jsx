import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setBanner } from './redux/bannerSlice';
import car from './assets/car.png';
import wire from './assets/wire.png';
import carwire from './assets/carwire.png';

const Banner = () => {
  const dispatch = useDispatch();
  const bannerImage = useSelector((state) => state.banner?.value) || car;

  const images = [car, wire, carwire];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % images.length;
      dispatch(setBanner(images[index]));
    }, 3000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div>
      <img 
        src={bannerImage}
        alt="Banner"
        style={{ width: '100%', height: '420px', borderRadius: '10px' }}
      />
    </div>
  );
};

export default Banner;
