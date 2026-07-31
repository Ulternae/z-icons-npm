import React from 'react';

export const LanSquareJSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm240 136v112c0 48.6-39.4 88-88 88s-88-39.4-88-88c0-13.3 10.7-24 24-24s24 10.7 24 24c0 22.1 17.9 40 40 40s40-17.9 40-40V168c0-13.3 10.7-24 24-24s24 10.7 24 24"})
);

export default LanSquareJSolid;
