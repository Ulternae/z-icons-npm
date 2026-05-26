import React from 'react';

export const LanSquareRSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm104 112h80c39.8 0 72 32.2 72 72 0 28.9-17 53.8-41.6 65.3l30.2 50.3c6.8 11.4 3.1 26.1-8.2 32.9s-26.1 3.1-32.9-8.2l-41-68.3h-34.4v56c0 13.3-10.7 24-24 24s-24-10.7-24-24V168c0-13.3 10.7-24 24-24zm72 96h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-56v48z"})
);

export default LanSquareRSolid;
