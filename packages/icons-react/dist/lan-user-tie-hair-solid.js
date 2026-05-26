import React from 'react';

export const LanUserTieHairSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M304 144v-16c0-18-5.9-34.6-16-48l-38.4 28.8C233 121.3 212.8 128 192 128h-48v16c0 44.2 35.8 80 80 80s80-35.8 80-80M224 0c70.7 0 128 57.3 128 128v16c0 70.7-57.3 128-128 128S96 214.7 96 144v-16C96 57.3 153.3 0 224 0m-30.5 304h61c9.7 0 17.5 7.8 17.5 17.5 0 4.2-1.5 8.2-4.2 11.4l-27.4 32 31 115.1h.6l34.6-138.5c2.2-8.7 11.1-14 19.5-10.8C388 354.3 432 414.3 432 484.5c0 15.1-12.3 27.4-27.4 27.4l-361.2.1C28.3 512 16 499.7 16 484.6c0-70.2 44-130.2 105.9-153.8 8.4-3.2 17.3 2.1 19.5 10.8L176 480.1h.6l31-115.1-27.4-32c-2.7-3.2-4.2-7.2-4.2-11.4 0-9.7 7.8-17.5 17.5-17.5z"})
);

export default LanUserTieHairSolid;
