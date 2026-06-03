import React from 'react';

export const LanClarinetRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -15.996 640 559.987',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M205.1 396.3 564.4 36.9l-93.1 10.4L435.6 83c7.4 4.1 12.4 12 12.4 21 0 13.3-10.7 24-24 24-9 0-16.9-5-21-12.4L371.6 147c7.4 4.1 12.4 12 12.4 21 0 13.3-10.7 24-24 24-9 0-16.9-5-21-12.4L307.6 211c7.4 4.1 12.4 12 12.4 21 0 13.3-10.7 24-24 24-9 0-16.9-5-21-12.4L243.6 275c7.4 4.1 12.4 12 12.4 21 0 13.3-10.7 24-24 24-9 0-16.9-5-21-12.4l-47.3 47.3c-12.2 12.2-26.5 22.1-42.2 29.3L75.6 405l79.4 79.4 20.8-45.9c7.1-15.7 17.1-30 29.3-42.2M636.8 2.1c5.9 12.2 3.4 26.9-6.2 36.5L239 430.2c-8.1 8.1-14.7 17.7-19.5 28.2l-30.4 66.9c-4.3 9.6-13.1 16.4-23.4 18.2s-20.9-1.4-28.3-8.9l-112-112c-7.4-7.4-10.7-18-8.9-28.3s8.7-19.1 18.2-23.4l66.9-30.4c10.5-4.8 20-11.4 28.2-19.5L441.4 9.4c5.1-5.1 11.9-8.4 19.1-9.2l144-16c13.5-1.5 26.5 5.7 32.3 17.9"})
);

export default LanClarinetRegular;
