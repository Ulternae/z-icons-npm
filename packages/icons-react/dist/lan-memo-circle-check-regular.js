import React from 'react';

export const LanMemoCircleCheckRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 48h256c8.8 0 16 7.2 16 16v154.9c15.2-5.4 31.3-8.9 48-10.3V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64v384c0 35.3 28.7 64 64 64h180c-10.5-14.6-19-30.7-25.1-48H96c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16m32 104c0 13.3 10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24H152c-13.3 0-24 10.7-24 24m0 96c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-80c-13.3 0-24 10.7-24 24m0 96c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24m448 56a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-86.6-60.9c7.1 5.2 8.7 15.2 3.5 22.3l-64 88c-2.8 3.8-7 6.2-11.7 6.5s-9.3-1.3-12.6-4.6l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l26.8 26.8 53-72.9c5.2-7.1 15.2-8.7 22.4-3.5"})
);

export default LanMemoCircleCheckRegular;
