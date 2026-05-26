import React from 'react';

export const LanArrowUpBigSmallRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M336 80h128v128H336zm-48 0v128c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48m48 288h64v64h-64zm-48 0v64c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48h-64c-26.5 0-48 21.5-48 48M145 39c-9.4-9.4-24.6-9.4-33.9 0L23 127c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47V456c0 13.3 10.7 24 24 24s24-10.7 24-24V113.9l47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9z"})
);

export default LanArrowUpBigSmallRegular;
