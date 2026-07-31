import React from 'react';

export const LanSquareZSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm88 112h144c9.3 0 17.7 5.3 21.7 13.7s2.8 18.3-3.1 25.5L202.6 320H296c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-9.3 0-17.7-5.3-21.7-13.7s-2.8-18.3 3.1-25.5l112-136.8H152c-13.3 0-24-10.7-24-24s10.7-24 24-24"})
);

export default LanSquareZSolid;
