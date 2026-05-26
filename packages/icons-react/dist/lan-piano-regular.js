import React from 'react';

export const LanPianoRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M432 384v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32h-32v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32h-96v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32h-32v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32h-32v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32H48v64c0 8.8 7.2 16 16 16h384c8.8 0 16-7.2 16-16v-64zM48 336h416v-8.4c0-6.1-3.4-11.6-8.8-14.3L396.8 284c-37.3-18.6-60.8-56.6-60.8-98.3 0-76-61.7-137.7-137.7-137.7H192c-79.5 0-144 64.5-144 144zm464-8.4V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192C0 86 86 0 192 0h6.3C300.9 0 384 83.2 384 185.7c0 23.5 13.2 44.9 34.2 55.4l58.4 29.2c21.7 10.8 35.4 33 35.4 57.2z"})
);

export default LanPianoRegular;
