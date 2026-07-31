import React from 'react';

export const LanSquareBitcoin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm192 0c8.8 0 16 7.2 16 16v16h16v-16c0-8.8 7.2-16 16-16s16 7.2 16 16v16.1c38.5 1.4 69.3 33.1 69.3 71.9 0 19.1-7.4 36.4-19.5 49.3 21.8 12.4 36.5 35.8 36.5 62.7 0 39.8-32.2 72-72 72h-14.2v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16h-16v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16h-15.9c-16.8 0-30.4-13.6-30.4-30.4V155.9c0-15.4 12.5-27.9 27.9-27.9H176v-16c0-8.8 7.2-16 16-16m78.2 256c22.1 0 40-17.9 40-40s-17.9-40-40-40H161.7v80zM240 160h-78.2v80h91.5c22.1 0 40-17.9 40-40s-17.9-40-40-40z"})
);

export default LanSquareBitcoin;
