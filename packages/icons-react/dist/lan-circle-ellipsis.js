import React from 'react';

export const LanCircleEllipsis = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 480a224 224 0 1 0 0-448 224 224 0 1 0 0 448m0-480a256 256 0 1 1 0 512 256 256 0 1 1 0-512m24 256a24 24 0 1 1-48 0 24 24 0 1 1 48 0m72-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-168 24a24 24 0 1 1-48 0 24 24 0 1 1 48 0"})
);

export default LanCircleEllipsis;
