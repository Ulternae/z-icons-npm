import React from 'react';

export const LanFlatbreadSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m105-327L185 361c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L327 151c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zm-120-74c9.4 9.4 9.4 24.6 0 33.9l-96 96c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l96-96c9.4-9.4 24.6-9.4 33.9 0m160 194-96 96c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l96-96c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9"})
);

export default LanFlatbreadSolid;
