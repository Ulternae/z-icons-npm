import React from 'react';

export const LanSquareHryvniaThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm242.1 22.8c35.2-4.1 66.1 23.4 66.1 58.8 0 18.2-8.3 35.2-22.4 46.4H328c4.4 0 8 3.6 8 8 0 4.3-3.5 7.9-7.8 8H119.7c-4.3-.1-7.8-3.7-7.8-8 0-4.4 3.6-8 8-8h137.3l15.7-10.5c12-8 19.2-21.5 19.2-36 0-25.9-22.6-45.9-48.3-42.9l-87.3 10.3c-4.4.5-8.4-2.6-8.9-7s2.6-8.4 7-8.9l87.3-10.3zM185.3 272h142.6c4.4 0 8 3.6 8 8s-3.6 8-8 8H190.1l-15.5 10.3c-12.1 8.1-19.4 21.7-19.4 36.3 0 25.9 22.4 46.1 48.2 43.4l104.5-11c4.4-.5 8.3 2.7 8.8 7.1s-2.7 8.3-7.1 8.8L205.1 394c-35.2 3.7-65.9-23.9-65.9-59.3 0-18.2 8.3-35.4 22.5-46.6L120 288c-4.4 0-8-3.6-8-8s3.6-8 8-8z"})
);

export default LanSquareHryvniaThin;
