import React from 'react';

export const LanTripleChevronsUpRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.968 320.468 568.018',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M145.3 357.4c9.4-7.7 23.3-7.1 32.1 1.7l136 136 1.7 1.8c7.7 9.4 7.1 23.3-1.7 32.1s-22.7 9.3-32.1 1.7l-1.8-1.7-119-119-119 119c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l136-136 1.8-1.7zm0-192c9.4-7.7 23.3-7.1 32.1 1.7l136 136 1.7 1.8c7.7 9.4 7.1 23.3-1.7 32.1s-22.7 9.3-32.1 1.7l-1.8-1.7-119-119-119 119c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l136-136 1.8-1.7zm0-192c9.4-7.7 23.3-7.1 32.1 1.7l136 136 1.7 1.8c7.7 9.4 7.1 23.3-1.7 32.1s-22.7 9.3-32.1 1.7l-1.8-1.7-119-119-119 119c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l136-136 1.8-1.7z"})
);

export default LanTripleChevronsUpRegular;
