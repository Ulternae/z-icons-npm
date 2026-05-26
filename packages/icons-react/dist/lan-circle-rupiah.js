import React from 'react';

export const LanCircleRupiah = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512M144 128c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16s16-7.2 16-16v-64h37.2l28 69.9c3.3 8.2 12.6 12.2 20.8 8.9s12.2-12.6 8.9-20.8l-25.7-64.2c25.2-11.2 42.8-36.5 42.8-65.8 0-39.8-32.2-72-72-72zm56 112h-40v-80h40c22.1 0 40 17.9 40 40s-17.9 40-40 40m88 0v144c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h24c30.9 0 56-25.1 56-56s-25.1-56-56-56h-40c-8.8 0-16 7.2-16 16m32 64v-48h24c13.3 0 24 10.7 24 24s-10.7 24-24 24z"})
);

export default LanCircleRupiah;
