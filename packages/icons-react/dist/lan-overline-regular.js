import React from 'react';

export const LanOverlineRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M24 48C10.7 48 0 37.3 0 24S10.7 0 24 0h336c13.3 0 24 10.7 24 24s-10.7 24-24 24zm312 272a144 144 0 1 0-288 0 144 144 0 1 0 288 0M0 320a192 192 0 1 1 384 0 192 192 0 1 1-384 0"})
);

export default LanOverlineRegular;
