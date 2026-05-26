import React from 'react';

export const LanArrowSquareDownThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm218.3 253.7-72-72c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l58.4 58.3V168c0-4.4 3.6-8 8-8s8 3.6 8 8v156.7l58.3-58.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-72 72c-3.1 3.1-8.2 3.1-11.3 0"})
);

export default LanArrowSquareDownThin;
