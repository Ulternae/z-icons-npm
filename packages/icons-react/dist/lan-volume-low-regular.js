import React from 'react';

export const LanVolumeLowRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M252.7 32c-9.4 0-18.3 3.7-25 10.3L110.1 160H48c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h62.1l117.7 117.7c6.6 6.6 15.6 10.3 25 10.3 19.5 0 35.3-15.8 35.3-35.3V67.3C288 47.8 272.2 32 252.7 32M137 201 240 98v316.1l-103-103c-4.5-4.5-10.6-7-17-7H48v-96h72c6.4 0 12.5-2.5 17-7zm243.6-19.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c21.5-17.7 35.4-44.5 35.4-74.6s-13.9-56.9-35.5-74.5z"})
);

export default LanVolumeLowRegular;
