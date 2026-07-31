import React from 'react';

export const LanArrowLeftToArcRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M48 256c0 114.9 93.1 208 208 208 13.3 0 24 10.7 24 24s-10.7 24-24 24C114.6 512 0 397.4 0 256S114.6 0 256 0c13.3 0 24 10.7 24 24s-10.7 24-24 24C141.1 48 48 141.1 48 256m223 121L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-63 63H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H241.9l63 63c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0z"})
);

export default LanArrowLeftToArcRegular;
