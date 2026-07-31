import React from 'react';

export const LanCarSideRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M161.1 80H240v112H101.9l36.8-96.5c3.5-9.3 12.5-15.5 22.4-15.5M288 192V80h72.2c7.5 0 14.6 3.5 19.1 9.5L457.4 192zm229.9.1L417.5 60.4C403.9 42.5 382.7 32 360.2 32H161.1c-29.9 0-56.6 18.4-67.3 46.4L49.9 193.6C21.3 200 0 225.5 0 256v80c0 35.3 28.7 64 64 64h.4c4 44.9 41.7 80 87.6 80s83.6-35.1 87.6-80h144.7c4 44.9 41.7 80 87.6 80s83.6-35.1 87.6-80h16.4c35.3 0 64-28.7 64-64v-16c0-68.7-54.2-124.8-122.1-127.9zM550.4 352c-14.6-28.5-44.2-48-78.4-48s-63.8 19.5-78.4 48H230.4c-14.6-28.5-44.2-48-78.4-48s-63.8 19.5-78.4 48H64c-8.8 0-16-7.2-16-16v-80c0-8.8 7.2-16 16-16h448c44.2 0 80 35.8 80 80v16c0 8.8-7.2 16-16 16zM152 352a40 40 0 1 1 0 80 40 40 0 1 1 0-80m280 40a40 40 0 1 1 80 0 40 40 0 1 1-80 0"})
);

export default LanCarSideRegular;
