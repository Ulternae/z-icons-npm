import React from 'react';

export const LanSquareGRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm152 160c0 39.8 32.2 72 72 72 28.3 0 52.7-16.3 64.5-40H248c-13.3 0-24-10.7-24-24s10.7-24 24-24h71.7c6.7 0 13.1 2.8 17.7 7.7s6.8 11.5 6.3 18.2c-5.1 61.6-56.7 110-119.6 110-66.3 0-120-53.7-120-120s53.7-120 120-120c30.7 0 58.8 11.6 80 30.6 9.9 8.8 10.7 24 1.9 33.9s-24 10.7-33.9 1.9c-12.8-11.4-29.5-18.3-48-18.3-39.8 0-72 32.2-72 72z"})
);

export default LanSquareGRegular;
