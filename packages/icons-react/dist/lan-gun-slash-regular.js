import React from 'react';

export const LanGunSlashRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L375.8 310.1l25-70h32.5c10.6 0 20.8-4.2 28.3-11.7l20.3-20.3H536c22.1 0 40-17.9 40-40v-64c0-22.1-17.9-40-40-40h-8v-8c0-13.3-10.7-24-24-24s-24 10.7-24 24v8H129.8L40.9-24.8zM177.8 112H528v48h-49.4c-10.6 0-20.8 4.2-28.3 11.7L430 192H257.8zm128 128h44.1l-11.6 32.5zm-102.6 33.1L163.5 432h-79l35.1-140.6c4.5-18.1 2.5-35.9-4.3-51.4h54.8l-48-48H47.9v-74.2l-39-39C3.4 85.7 0 94.4 0 104v96c0 22.1 17.9 40 40 40h2c20.8 0 36.1 19.6 31 39.8L33 440.2c-2.4 9.6-.2 19.7 5.8 27.5S54.1 480 64 480h112c14.7 0 27.5-10 31-24.2L232.9 352h49.2z"})
);

export default LanGunSlashRegular;
