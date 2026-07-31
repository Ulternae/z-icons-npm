import React from 'react';

export const LanSquareQuartersThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 48c-10.4 0-20 3.3-27.8 8.9L224 244.7 411.8 56.9C404 51.3 394.4 48 384 48zM24.9 68.2C19.3 76 16 85.6 16 96v320c0 10.4 3.3 20 8.9 27.8L212.7 256zm11.3 386.9C44 460.7 53.6 464 64 464h320c10.4 0 20-3.3 27.8-8.9L224 267.3zm386.9-11.3c5.6-7.8 8.9-17.4 8.9-27.8V96c0-10.4-3.3-20-8.9-27.8L235.3 256zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"})
);

export default LanSquareQuartersThin;
