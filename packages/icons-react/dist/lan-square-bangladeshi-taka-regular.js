import React from 'react';

export const LanSquareBangladeshiTakaRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm104.5 51.3c2.6-13 15.2-21.4 28.2-18.8l10.6 2.1c28.3 5.7 48.7 30.5 48.7 59.4v18h16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v83.4c0 6.9 5.6 12.6 12.6 12.6h24c37.2 0 67.4-30.2 67.4-67.4v-16c0-6.9-5.6-12.6-12.6-12.6H280c-13.3 0-24-10.7-24-24s10.7-24 24-24h3.4c33.5 0 60.6 27.1 60.6 60.6v16c0 63.7-51.7 115.4-115.4 115.4h-24c-33.5 0-60.6-27.1-60.6-60.6V240h-13.7c-8.8 0-16-7.2-16-16s7.2-16 16-16H144v-18c0-6-4.2-11.2-10.1-12.3l-10.6-2.1c-13-2.6-21.4-15.2-18.8-28.2z"})
);

export default LanSquareBangladeshiTakaRegular;
