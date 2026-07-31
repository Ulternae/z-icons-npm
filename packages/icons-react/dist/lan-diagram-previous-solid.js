import React from 'react';

export const LanDiagramPreviousSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M384 224c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64h34c-5.6-21.7.5-45.1 16.7-61.3l64-64c25-25 65.5-25 90.5 0l64 64c16.2 16.2 22.3 39.5 16.7 61.3h34zM64 288c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64v-64c0-35.3-28.7-64-64-64H256v-64h32c6.5 0 12.3-3.9 14.8-9.9s1.1-12.9-3.5-17.4l-64-64c-6.2-6.2-16.4-6.2-22.6 0l-64 64c-4.6 4.6-5.9 11.5-3.5 17.4s8.3 9.9 14.8 9.9h32v64z"})
);

export default LanDiagramPreviousSolid;
