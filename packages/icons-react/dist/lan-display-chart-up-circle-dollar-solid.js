import React from 'react';

export const LanDisplayChartUpCircleDollarSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 96h384v112.7c5.3-.4 10.6-.7 16-.7 16.6 0 32.7 2.1 48 6V96c0-35.3-28.7-64-64-64H96c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h144l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h188c-22.7-31.5-36-70.2-36-112 0-16.6 2.1-32.7 6-48H96zm352 72c0-13.3-10.7-24-24-24h-80c-13.3 0-24 10.7-24 24s10.7 24 24 24h22.1L312 246.1l-63-63c-9.4-9.4-24.6-9.4-33.9 0l-80 80c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l63-63 63 63c4.5 4.5 10.6 7 17 7s12.5-2.5 17-7l17.9-17.8c8.4-10.4 17.9-19.9 28.3-28.3l24.9-24.9v7.7c14.9-8.6 31-15.3 48-19.6v-46zm192 232a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-160-80c0-8.8 7.2-16 16-16s16 7.2 16 16v8h16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-45.8c-5.6 0-10.2 4.6-10.2 10.2 0 4.9 3.5 9.1 8.3 10l45 8.2c20 3.6 34.6 21.1 34.6 41.5 0 23.3-18.9 42.2-42.2 42.2h-5.8v8c0 8.8-7.2 16-16 16s-16-7.2-16-16v-8h-16c-8.8 0-16-7.2-16-16s7.2-16 16-16h53.8c5.6 0 10.2-4.6 10.2-10.2 0-4.9-3.5-9.1-8.3-10l-45-8.2c-20-3.6-34.6-21.1-34.6-41.5 0-22.6 17.7-41 40-42.1z"})
);

export default LanDisplayChartUpCircleDollarSolid;
