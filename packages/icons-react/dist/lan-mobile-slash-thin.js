import React from 'react';

export const LanMobileSlashThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32.138 576.038 576.108',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M2.3-29.8c2.7-2.7 7-3.1 10.1-1l1.3 1L112 68.5v-4.6c0-33.1 25.2-60.4 57.5-63.7l6.5-.3h224l6.5.3C438.8 3.6 464 30.9 464 64v356.6l109.7 109.7 1 1.2c2.1 3.1 1.7 7.3-1 10.1s-7 3.1-10.1 1l-1.2-1-560-560-1-1.3c-2-3.1-1.7-7.3 1-10.1zm125.7 205V448c0 26.5 21.5 48 48 48h224c13.5 0 25.6-5.6 34.3-14.5l11.3 11.3c-10.2 10.4-23.8 17.3-39.1 18.9l-6.5.3H176l-6.5-.3c-32.3-3.3-57.5-30.6-57.5-63.7V159.2zM328 432c4.4 0 8 3.6 8 8s-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8s3.6-8 8-8zM176 16c-26.5 0-48 21.5-48 48v20.6l320 320V64c0-26.5-21.5-48-48-48z"})
);

export default LanMobileSlashThin;
