import React from 'react';

export const LanCircleEllipsisVertical = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m256-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-24-72a24 24 0 1 1 48 0 24 24 0 1 1-48 0m24 168a24 24 0 1 1 0 48 24 24 0 1 1 0-48"})
);

export default LanCircleEllipsisVertical;
