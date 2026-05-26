import React from 'react';

export const LanBorderBottomRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448 456c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h400c13.3 0 24 10.7 24 24m-64-136a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-320 0a32 32 0 1 1-64 0 32 32 0 1 1 64 0m320-128a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-320 0a32 32 0 1 1-64 0 32 32 0 1 1 64 0M384 64a32 32 0 1 1 64 0 32 32 0 1 1-64 0M64 64a32 32 0 1 1-64 0 32 32 0 1 1 64 0m192 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-64 0a32 32 0 1 1-64 0 32 32 0 1 1 64 0"})
);

export default LanBorderBottomRegular;
