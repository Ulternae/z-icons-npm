import React from 'react';

export const LanVolumeSlashRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-249-249V67.4c0-19.5-15.8-35.3-35.3-35.3-9.4 0-18.3 3.7-25 10.3L184 118.1zM217.9 152 272 97.9v108.2zm-79.7 56-48-48H80c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h62.1l117.7 117.7c6.6 6.6 15.6 10.3 25 10.3 19.5 0 35.3-15.8 35.3-35.3v-54.9l-48-48V414l-103-103c-4.5-4.5-10.6-7-17-7h-72v-96h58.2zm301.2-97.5c-8.4 10.3-6.8 25.4 3.5 33.8 32.5 26.4 53.2 66.7 53.2 111.8 0 33-11.1 63.4-29.8 87.7l34.2 34.2c27.2-33.1 43.6-75.6 43.6-121.9 0-60.1-27.7-113.8-70.9-149-10.3-8.4-25.4-6.8-33.8 3.5zM396.5 274l35.3 35.3A95.5 95.5 0 0 0 448 256c0-30.1-13.9-56.9-35.5-74.5-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8c10.9 8.8 17.7 22.2 17.7 37.3 0 6.4-1.2 12.4-3.5 18z"})
);

export default LanVolumeSlashRegular;
