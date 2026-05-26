import React from 'react';

export const LanSquareWon = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm224 32c7.1 0 13.4 4.7 15.4 11.6L268.1 240h41.2l27.4-92.5c2.5-8.5 11.4-13.3 19.9-10.8s13.3 11.4 10.8 19.9L342.7 240h9.4c8.8 0 16 7.2 16 16s-7.2 16-16 16h-18.9l-29.8 100.5c-2 6.8-8.3 11.5-15.4 11.5s-13.4-4.8-15.3-11.6L244 272h-39.9l-28.7 100.4c-2 6.8-8.2 11.6-15.3 11.6s-13.4-4.6-15.4-11.5L114.9 272H96c-8.8 0-16-7.2-16-16s7.2-16 16-16h9.4l-24.7-83.4c-2.5-8.5 2.3-17.4 10.8-19.9s17.4 2.3 19.9 10.8l27.4 92.5H180l28.7-100.4c2-6.9 8.2-11.6 15.4-11.6zm64.3 182.7 11.5-38.7h-22.5l11.1 38.7zM224 202.2 213.2 240h21.6zM148.2 272l11.5 38.7 11.1-38.7h-22.5z"})
);

export default LanSquareWon;
