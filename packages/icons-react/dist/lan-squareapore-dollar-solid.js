import React from 'react';

export const LanSquareaporeDollarSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm88 119.6c0 30.3 21.4 56.4 51.1 62.3l16.4 3.3c7.3 1.5 12.5 7.8 12.5 15.3 0 8.6-7 15.6-15.6 15.6L120 312c-13.3 0-24 10.7-24 24s10.7 24 24 24h32.4c35.1 0 63.6-28.5 63.6-63.6 0-30.3-21.4-56.4-51.1-62.3l-16.4-3.3c-7.3-1.5-12.5-7.8-12.5-15.3 0-8.6 7-15.6 15.6-15.6H176c13.3 0 24-10.7 24-24s-10.7-24-24-24h-24.4c-35.1.1-63.6 28.6-63.6 63.7M312 136c0-8.8-7.2-16-16-16s-16 7.2-16 16v17.9c-27.6 6.9-48 31.9-48 61.6 0 30.3 21.4 56.4 51.1 62.3l16.4 3.3c7.3 1.5 12.5 7.8 12.5 15.3 0 8.6-7 15.6-15.6 15.6H264c-13.3 0-24 10.7-24 24s10.7 24 24 24h16v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-17.9c27.6-6.9 48-31.9 48-61.6 0-30.3-21.4-56.4-51.1-62.3l-16.4-3.3c-7.3-1.5-12.5-7.8-12.5-15.3 0-8.6 7-15.6 15.6-15.6H320c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8z"})
);

export default LanSquareaporeDollarSolid;
