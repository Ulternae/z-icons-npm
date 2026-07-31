import React from 'react';

export const LanTripleChevronsRightRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M15 103c9.4-9.4 24.6-9.4 33.9 0l136 136 1.7 1.8c7.7 9.4 7.1 23.3-1.7 32.1l-136 136-1.8 1.7c-9.4 7.7-23.3 7.1-32.1-1.7s-9.3-22.7-1.7-32.1L15 375l119.1-119L15 137c-9.4-9.4-9.4-24.6 0-33.9zm192 0c9.4-9.4 24.6-9.4 33.9 0l136 136 1.7 1.8c7.7 9.4 7.1 23.3-1.7 32.1l-136 136-1.8 1.7c-9.4 7.7-23.3 7.1-32.1-1.7s-9.3-22.7-1.7-32.1l1.7-1.8 119-119-119-119c-9.4-9.4-9.4-24.6 0-33.9zm192 0c9.4-9.4 24.6-9.4 33.9 0l136 136 1.7 1.8c7.7 9.4 7.1 23.3-1.7 32.1l-136 136-1.8 1.7c-9.4 7.7-23.3 7.1-32.1-1.7s-9.3-22.7-1.7-32.1l1.7-1.8 119-119-119-119c-9.4-9.4-9.4-24.6 0-33.9z"})
);

export default LanTripleChevronsRightRegular;
