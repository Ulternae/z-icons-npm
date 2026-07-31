import React from 'react';

export const LanCircleCRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-50.9-205.1c-28.1-28.1-28.1-73.7 0-101.8s73.7-28.1 101.8 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-46.9-46.9-122.8-46.9-169.7 0s-46.9 122.8 0 169.7 122.8 46.9 169.7 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-28.1 28.1-73.7 28.1-101.8 0z"})
);

export default LanCircleCRegular;
