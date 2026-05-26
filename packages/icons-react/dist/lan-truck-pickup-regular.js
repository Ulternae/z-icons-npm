import React from 'react';

export const LanTruckPickupRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M272 192h168L377.5 87.8c-2.9-4.8-8.1-7.8-13.7-7.8H272zm-48 0V64c0-17.7 14.3-32 32-32h107.8c22.5 0 43.3 11.8 54.9 31.1L496 192h64c26.5 0 48 21.5 48 48v96h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-40.4c.2 2.6.4 5.3.4 8 0 48.6-39.4 88-88 88s-88-39.4-88-88c0-2.7.1-5.4.4-8H239.7c.2 2.6.4 5.3.4 8 0 48.6-39.4 88-88 88s-88-39.4-88-88c0-2.7.1-5.4.4-8H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h8v-96c0-26.5 21.5-48 48-48zm0 48H80v96h4.1c16.1-19.5 40.6-32 67.9-32s51.7 12.5 67.9 32h200.2c16.1-19.5 40.6-32 67.9-32s51.7 12.5 67.9 32h4.1v-96zm-32 152a40 40 0 1 0-80 0 40 40 0 1 0 80 0m296 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80"})
);

export default LanTruckPickupRegular;
