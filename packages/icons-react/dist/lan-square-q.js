import React from 'react';

export const LanSquareQ = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm150.7 160c0 40.5 32.8 73.3 73.3 73.3 14.9 0 28.8-4.5 40.4-12.2l-34.8-34.8c-5.7-5.7-5.7-15 0-20.7s15-5.7 20.7 0l34.8 34.8c7.7-11.6 12.2-25.5 12.2-40.4 0-40.5-32.8-73.3-73.3-73.3s-73.3 32.8-73.3 73.3m176 0c0 23.1-7.6 44.3-20.4 61.5l16.1 16.1c5.7 5.7 5.7 15 0 20.7s-15 5.7-20.7 0l-16.1-16.1c-17.1 12.8-38.4 20.4-61.5 20.4-56.7 0-102.7-46-102.7-102.7s46-102.7 102.7-102.7 102.7 46 102.7 102.7z"})
);

export default LanSquareQ;
