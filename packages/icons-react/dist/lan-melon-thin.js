import React from 'react';

export const LanMelonThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M496 256c0-47.7-13.9-92.1-37.9-129.5 3.9 59.8-37.6 145.8-111.7 219.9S186.4 462 126.5 458.1c37.4 24 81.8 37.9 129.5 37.9 132.5 0 240-107.5 240-240M53.9 385.5C50 325.7 91.5 239.7 165.6 165.6S325.7 50 385.5 53.9C348.1 29.9 303.7 16 256 16 123.5 16 16 123.5 16 256c0 47.7 13.9 92.1 37.9 129.5M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0M425.7 86.3c-18.4-18.4-53.2-22.9-100.6-7.1-46.3 15.4-99.6 49-148.2 97.6s-82.2 102-97.6 148.3c-15.8 47.3-11.3 82.2 7 100.6s53.2 22.8 100.6 7.1c46.3-15.4 99.6-49 148.2-97.6s82.2-101.9 97.6-148.2c15.8-47.3 11.3-82.2-7.1-100.6z"})
);

export default LanMelonThin;
