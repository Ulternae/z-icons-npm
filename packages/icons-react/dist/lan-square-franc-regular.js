import React from 'react';

export const LanSquareFrancRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm160 56c0-13.3 10.7-24 24-24h112c13.3 0 24 10.7 24 24s-10.7 24-24 24h-88v40h56c13.3 0 24 10.7 24 24s-10.7 24-24 24h-56v24h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40h-16c-8.8 0-16-7.2-16-16s7.2-16 16-16h16z"})
);

export default LanSquareFrancRegular;
