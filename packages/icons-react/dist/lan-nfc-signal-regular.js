import React from 'react';

export const LanNfcSignalRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M416 80H96c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h189.7c-5.1 15.4-8.8 31.5-11.1 48H96c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v153q-25.05 6.6-48 17.4V96c0-8.8-7.2-16-16-16M306.6 384H168c-22.1 0-40-17.9-40-40V168c0-22.1 17.9-40 40-40h16c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v160h160V176h-56v48c9.7 7.3 16 18.9 16 32 0 22.1-17.9 40-40 40s-40-17.9-40-40c0-13.1 6.3-24.7 16-32v-56c0-22.1 17.9-40 40-40h72c22.1 0 40 17.9 40 40v127.3c-31.7 23.7-58.1 53.9-77.4 88.7M552 288c13.3 0 24 10.7 24 24s-10.7 24-24 24c-101.6 0-184 82.4-184 184 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-128.1 103.9-232 232-232m-8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64m32-72c0 13.3-10.7 24-24 24-48.6 0-88 39.4-88 88 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-75.1 60.9-136 136-136 13.3 0 24 10.7 24 24"})
);

export default LanNfcSignalRegular;
