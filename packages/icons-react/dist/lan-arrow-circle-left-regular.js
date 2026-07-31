import React from 'react';

export const LanArrowCircleLeftRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-97-273c-9.4 9.4-9.4 24.6 0 33.9l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-31-31H336c13.3 0 24-10.7 24-24s-10.7-24-24-24H233.9l31-31c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-72 72z"})
);

export default LanArrowCircleLeftRegular;
