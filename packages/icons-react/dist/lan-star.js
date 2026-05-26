import React from 'react';

export const LanStar = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M383 125.3 309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1l-73.6 144.2-159.9 25.4c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2l144.4-73.4L432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2l-25.3-159.9 114.4-114.5c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3zm-5 31.6 144.4 23-103.3 103.5c-7.2 7.2-10.6 17.5-9 27.6l22.8 144.3L302.6 389c-9.1-4.6-19.9-4.6-29 0l-130.4 66.3L166 310.9c1.6-10.1-1.7-20.4-9-27.6L53.7 179.8l144.4-23c10.1-1.6 18.8-7.9 23.5-17.1L288.1 9.6l66.4 130.2c4.6 9.1 13.4 15.5 23.5 17.1"})
);

export default LanStar;
