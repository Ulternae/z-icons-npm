import React from 'react';

export const LanSquareTerminalThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M384 48c26.5 0 48 21.5 48 48v320c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm34.3 114.3c-3.1 3.1-3.1 8.2 0 11.3l98.3 98.3-98.3 98.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l104-104c3.1-3.1 3.1-8.2 0-11.3l-104-104c-3.1-3.1-8.2-3.1-11.3 0zM200 368c-4.4 0-8 3.6-8 8s3.6 8 8 8h160c4.4 0 8-3.6 8-8s-3.6-8-8-8z"})
);

export default LanSquareTerminalThin;
