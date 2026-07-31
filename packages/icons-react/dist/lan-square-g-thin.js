import React from 'react';

export const LanSquareGThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm136 160c0 48.6 39.4 88 88 88 45.9 0 83.6-35.1 87.7-80h-78.2c-4.4 0-8-3.6-8-8s3.6-8 8-8H320c4.4 0 8 3.6 8 8 0 57.4-46.6 104-104 104s-104-46.6-104-104 46.6-104 104-104c26.6 0 50.9 10 69.3 26.5 3.3 2.9 3.6 8 .6 11.3s-8 3.6-11.3.6C267 176.5 246.5 168 223.9 168c-48.6 0-88 39.4-88 88z"})
);

export default LanSquareGThin;
