import React from 'react';

export const LanCarSirenRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M312 64h47.1c44.5 0 83.1 30.5 93.4 73.8l13.5 56.8c26.6 7.8 46 32.3 46 61.4v200c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40H48v40c0 13.3-10.7 24-24 24S0 469.3 0 456V256c0-29.1 19.4-53.6 46-61.4l13.5-56.8C69.8 94.5 108.4 64 152.9 64H200l6.3-25.2C212 16 232.5 0 256 0s44 16 49.7 38.8zm-205.8 84.9L95.9 192h320.2l-10.3-43.1c-5.1-21.6-24.5-36.9-46.7-36.9H152.8c-22.2 0-41.5 15.3-46.7 36.9zM448 240H64c-8.8 0-16 7.2-16 16v112h416V256c0-8.8-7.2-16-16-16M80 304a32 32 0 1 1 64 0 32 32 0 1 1-64 0m320-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"})
);

export default LanCarSirenRegular;
