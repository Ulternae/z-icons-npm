import React from 'react';

export const LanTripleChevronsLeftRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M144.8 101.4c9.4-7.7 23.3-7.1 32.1 1.7s9.3 22.7 1.7 32.1L177 137 57.9 256 177 375c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L7 273l-1.6-1.9c-7.7-9.4-7.2-23.3 1.6-32.1l136-136 1.8-1.7zm192 0c9.4-7.7 23.3-7.1 32.1 1.7s9.3 22.7 1.7 32.1l-1.7 1.8-119 119 119 119c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-136-136-1.7-1.8c-7.7-9.4-7.1-23.3 1.7-32.1l136-136 1.8-1.7zm192 0c9.4-7.7 23.3-7.1 32.1 1.7s9.3 22.7 1.7 32.1l-1.7 1.8-119 119 119 119c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-136-136-1.7-1.8c-7.7-9.4-7.1-23.3 1.7-32.1l136-136 1.8-1.7z"})
);

export default LanTripleChevronsLeftRegular;
