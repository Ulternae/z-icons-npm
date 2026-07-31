import React from 'react';

export const LanMelonRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M464 256c0-25.8-4.7-50.4-13.2-73.2-14.9 51.3-51.2 110.5-104.3 163.6s-112.4 89.5-163.7 104.4c22.8 8.6 47.4 13.2 73.2 13.2 114.9 0 208-93.1 208-208M61.2 329.2c14.9-51.3 51.2-110.5 104.3-163.6S277.9 76.1 329.2 61.2C306.4 52.6 281.8 48 256 48 141.1 48 48 141.1 48 256c0 25.8 4.7 50.4 13.2 73.2M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m403-147c-5.2-5.2-24.1-13.9-67.8.7-40.7 13.6-89.8 44-135.7 89.9s-76.3 95-89.9 135.7c-14.6 43.7-5.8 62.6-.7 67.8s24.1 13.9 67.8-.7c40.7-13.6 89.9-44 135.7-89.9s76.3-95 89.9-135.7c14.6-43.7 5.8-62.6.7-67.8"})
);

export default LanMelonRegular;
