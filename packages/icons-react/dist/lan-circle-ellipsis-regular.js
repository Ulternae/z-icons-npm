import React from 'react';

export const LanCircleEllipsisRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 464a208 208 0 1 0 0-416 208 208 0 1 0 0 416m0-464a256 256 0 1 1 0 512 256 256 0 1 1 0-512m32 256a32 32 0 1 1-64 0 32 32 0 1 1 64 0m64-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m-160 32a32 32 0 1 1-64 0 32 32 0 1 1 64 0"})
);

export default LanCircleEllipsisRegular;
