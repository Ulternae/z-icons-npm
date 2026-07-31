import React from 'react';

export const LanSquareEuroThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm137.5 136H112c-4.4 0-8-3.6-8-8s3.6-8 8-8h29.7c17.1-51.1 65.3-88 122.2-88h41c4.4 0 8 3.6 8 8s-3.6 8-8 8h-41c-47.9 0-88.8 29.9-105.2 72H232c4.4 0 8 3.6 8 8s-3.6 8-8 8h-78.1c-1.8 8-2.7 16.3-2.7 24.8 0 8 .8 15.7 2.4 23.2H232c4.4 0 8 3.6 8 8s-3.6 8-8 8h-73.8c15.9 42.9 57.3 73.5 105.7 73.5h41c4.4 0 8 3.6 8 8s-3.6 8-8 8h-41c-57.4 0-106.1-37.6-122.7-89.5H112c-4.4 0-8-3.6-8-8s3.6-8 8-8h25.2c-1.4-7.5-2.1-15.3-2.1-23.2 0-8.5.8-16.7 2.4-24.8"})
);

export default LanSquareEuroThin;
