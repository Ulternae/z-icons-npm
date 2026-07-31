import React from 'react';

export const LanCircleGuaraniSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-16-384c0-8.8 7.2-16 16-16s16 7.2 16 16v9.1c26.3 3.5 50 15.6 68 33.2 9.5 9.3 9.6 24.5.3 33.9s-24.5 9.6-33.9.3c-9.4-9.2-21.2-15.8-34.4-18.8v46.2h80c13.3 0 24 10.7 24 24 0 60.8-45.3 111.1-104 118.9v9.1c0 8.8-7.2 16-16 16s-16-7.2-16-16v-9.1c-58.7-7.8-104-58.1-104-118.9S181.3 144.8 240 137v-9.1zm-56 128c0 34.3 23.9 62.9 56 70.2V185.8c-32.1 7.3-56 36-56 70.2m139.9 24H272v46.2c24.2-5.5 43.8-23.2 51.9-46.2"})
);

export default LanCircleGuaraniSolid;
