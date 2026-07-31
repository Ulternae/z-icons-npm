import React from 'react';

export const LanNfcRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M384 80c8.8 0 16 7.2 16 16v320c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm200 224c0-13.1-6.3-24.7-16-32v-48h56v160H144V176h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-16c-22.1 0-40 17.9-40 40v176c0 22.1 17.9 40 40 40h176c22.1 0 40-17.9 40-40V168c0-22.1-17.9-40-40-40h-72c-22.1 0-40 17.9-40 40v56c-9.7 7.3-16 18.9-16 32 0 22.1 17.9 40 40 40s40-17.9 40-40"})
);

export default LanNfcRegular;
