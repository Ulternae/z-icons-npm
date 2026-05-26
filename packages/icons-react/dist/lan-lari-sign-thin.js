import React from 'react';

export const LanLariSignThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M136 0c4.4 0 8 3.6 8 8v62.4c15.9-4.2 32.6-6.4 49.9-6.4 10.3 0 20.3.8 30.1 2.3V8c0-4.4 3.6-8 8-8s8 3.6 8 8v61.5c72.4 17.5 128.9 75.3 143.8 148.1.9 4.3-1.9 8.6-6.2 9.4s-8.6-1.9-9.4-6.2C354.8 155.4 304.7 103.1 240 86v162c0 4.4-3.6 8-8 8s-8-3.6-8-8V82.5c-15.6-2.6-45.2-5.5-80 4.5v161c0 4.4-3.6 8-8 8s-8-3.6-8-8V92.5C62.3 118.4 16 181.9 16 256c0 97.1 79.6 176 177.9 176H376c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h108.3C47.9 402.4 0 334.8 0 256c0-83.2 53.4-153.9 128-180.6V8c0-4.4 3.6-8 8-8"})
);

export default LanLariSignThin;
