import React from 'react';

export const LanSquareQuarters = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M55.7 65.1 224 233.4 392.3 65.1c-2.6-.7-5.4-1.1-8.3-1.1H64c-2.9 0-5.6.4-8.3 1.1M33.1 87.7c-.7 2.7-1.1 5.4-1.1 8.3v320c0 2.9.4 5.6 1.1 8.3L201.4 256zm22.6 359.2c2.6.7 5.4 1.1 8.3 1.1h320c2.9 0 5.6-.4 8.3-1.1L224 278.6zm359.2-22.6c.7-2.6 1.1-5.4 1.1-8.3V96c0-2.9-.4-5.6-1.1-8.3L246.6 256zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"})
);

export default LanSquareQuarters;
