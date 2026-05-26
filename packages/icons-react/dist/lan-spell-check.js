import React from 'react';

export const LanSpellCheck = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M120 32c-48.6 0-88 39.4-88 88v184c0 8.8 7.2 16 16 16s16-7.2 16-16v-96h128v96c0 8.8 7.2 16 16 16s16-7.2 16-16V120c0-48.6-39.4-88-88-88zm72 144H64v-56c0-30.9 25.1-56 56-56h16c30.9 0 56 25.1 56 56zm96-144c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16h96c44.2 0 80-35.8 80-80 0-30-16.6-56.2-41-69.9 15.4-14.6 25-35.2 25-58.1 0-44.2-35.8-80-80-80zm80 128h-64V64h64c26.5 0 48 21.5 48 48s-21.5 48-48 48m-64 128v-96h80c26.5 0 48 21.5 48 48s-21.5 48-48 48zm268.8 25.6c5.3-7.1 3.9-17.1-3.2-22.4s-17.1-3.9-22.4 3.2L415.3 470.2l-67-80.5c-5.7-6.8-15.7-7.7-22.5-2s-7.7 15.7-2 22.5l80 96c3.1 3.8 7.8 5.9 12.7 5.8s9.5-2.5 12.4-6.4l144-192z"})
);

export default LanSpellCheck;
