import React from 'react';

export const LanBezierCurveRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M352 80v64h-64V80zm-64-48c-26.5 0-48 21.5-48 48v8H123.3C113.9 64.5 90.9 48 64 48 28.7 48 0 76.7 0 112s28.7 64 64 64c26.9 0 49.9-16.5 59.3-40h79C138.2 173.8 93.9 241.5 88.5 320H80c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48h-7.3c5.9-68.4 49.2-126.1 109.4-152.6C254.3 182.1 270 192 288 192h64c18 0 33.7-9.9 41.9-24.6 60.2 26.4 103.5 84.1 109.4 152.6H496c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48h-8.5c-5.3-78.5-49.7-146.2-113.8-184h79c9.5 23.5 32.5 40 59.3 40 35.3 0 64-28.7 64-64s-28.7-64-64-64c-26.9 0-49.9 16.5-59.3 40H400v-8c0-26.5-21.5-48-48-48zM48 112a16 16 0 1 1 32 0 16 16 0 1 1-32 0m512 0a16 16 0 1 1 32 0 16 16 0 1 1-32 0M144 368v64H80v-64zm352 0h64v64h-64z"})
);

export default LanBezierCurveRegular;
