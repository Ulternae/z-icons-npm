import React from 'react';

export const LanLaptopFile = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 64c0-17.7 14.3-32 32-32h288c17.7 0 32 14.3 32 32v48h32V64c0-35.3-28.7-64-64-64H128C92.7 0 64 28.7 64 64v176H22.4C10 240 0 250 0 262.4 0 311.9 40.1 352 89.6 352H240v-32H89.6c-28.5 0-52.2-20.8-56.8-48H240v-32H96zm416 256v144c0 8.8-7.2 16-16 16H336c-8.8 0-16-7.2-16-16V208c0-8.8 7.2-16 16-16h76.1c1.3 0 2.6.2 3.9.5V272c0 26.5 21.5 48 48 48zm-64-98.7 59.3 59.3c2.1 2.1 3.5 4.6 4.2 7.4H464c-8.8 0-16-7.2-16-16zM336 160c-26.5 0-48 21.5-48 48v256c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48V291.9c0-12.7-5.1-24.9-14.1-33.9L446 174.1c-9-9-21.2-14.1-33.9-14.1z"})
);

export default LanLaptopFile;
