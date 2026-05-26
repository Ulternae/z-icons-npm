import React from 'react';

export const LanDrumstickThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M176 185.9C176 92.1 252.1 16 345.9 16 428.8 16 496 83.2 496 166.1c0 93.8-76.1 169.9-169.9 169.9h-97c-29.3 0-53.1-23.8-53.1-53.1zM345.9 0C243.2 0 160 83.2 160 185.9v98.8l-45.8 45.8c-3.1 3.1-9.6 3.6-15.7-.3-10-6.4-21.9-10.1-34.6-10.1-35.3 0-64 28.7-64 64s28.7 64 64 64c0 35.3 28.7 64 64 64s64-28.7 64-64c0-12.7-3.7-24.6-10.1-34.6-3.9-6.1-3.4-12.6-.3-15.7l45.8-45.8h98.8C428.8 352 512 268.8 512 166.1 512 74.4 437.6 0 345.9 0M208 348.7l-37.7 37.7c-10.3 10.3-8.2 25.8-1.8 35.6 4.8 7.5 7.6 16.4 7.6 25.9 0 26.5-21.5 48-48 48s-48-21.5-48-48c0-8.7-7.3-16-16-16-26.5 0-48-21.5-48-48s21.5-48 48-48c9.6 0 18.5 2.8 25.9 7.6 9.8 6.3 25.3 8.5 35.6-1.8l37.7-37.7c6.8 21.2 23.5 37.9 44.7 44.7"})
);

export default LanDrumstickThin;
