import React from 'react';

export const LanParkingCircleSlashRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M419.1 385.1 336 302c24.2-17.4 40-45.9 40-78 0-53-43-96-96-96h-80c-10.4 0-19.6 4.9-25.5 12.6l-47.6-47.7C162.4 64.8 207.2 48 256 48c114.9 0 208 93.1 208 208 0 48.8-16.8 93.7-44.9 129.1M385.2 419c-35.5 28.1-80.3 44.9-129.1 44.9-114.9 0-208-93.1-208-208 0-48.8 16.8-93.7 44.9-129.1l75 75.1V360c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h64c2 0 3.9-.1 5.9-.2l99.2 99.2zm-84.1-151.9L216 182v-6.1h64c26.5 0 48 21.5 48 48 0 18.9-11 35.3-26.9 43.1zM216 249.9l22.1 22.1H216zM256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512"})
);

export default LanParkingCircleSlashRegular;
