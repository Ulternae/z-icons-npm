import React from 'react';

export const LanBorderTop = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 48c0-8.8 7.2-16 16-16h416c8.8 0 16 7.2 16 16s-7.2 16-16 16H16C7.2 64 0 56.8 0 48m56 144a24 24 0 1 1-48 0 24 24 0 1 1 48 0m336 0a24 24 0 1 1 48 0 24 24 0 1 1-48 0M56 320a24 24 0 1 1-48 0 24 24 0 1 1 48 0m336 0a24 24 0 1 1 48 0 24 24 0 1 1-48 0M56 448a24 24 0 1 1-48 0 24 24 0 1 1 48 0m336 0a24 24 0 1 1 48 0 24 24 0 1 1-48 0m-208 0a24 24 0 1 1-48 0 24 24 0 1 1 48 0m80 0a24 24 0 1 1 48 0 24 24 0 1 1-48 0"})
);

export default LanBorderTop;
