import React from 'react';

export const LanSquareNfiThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm78.7 67.7L176 316.5V168c0-4.4 3.6-8 8-8s8 3.6 8 8v176c0 3.6-2.3 6.7-5.8 7.7s-7.1-.4-9-3.4L80 195.5V344c0 4.4-3.6 8-8 8s-8-3.6-8-8V168c0-3.6 2.3-6.7 5.8-7.7s7.1.4 9 3.4zM224 168c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8s-3.6 8-8 8h-72v80h56c4.4 0 8 3.6 8 8s-3.6 8-8 8h-56v72c0 4.4-3.6 8-8 8s-8-3.6-8-8zm144 0v176c0 4.4-3.6 8-8 8s-8-3.6-8-8V168c0-4.4 3.6-8 8-8s8 3.6 8 8"})
);

export default LanSquareNfiThin;
