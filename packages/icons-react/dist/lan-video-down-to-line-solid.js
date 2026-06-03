import React from 'react';

export const LanVideoDownToLineSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M24 496h400c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24M320 0c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64h-38.4l35 58.3c2.2 3.7 3.4 8 3.4 12.3v1.4c0 13.3-10.7 24-24 24H152c-13.3 0-24-10.7-24-24v-1.4c0-4.3 1.2-8.6 3.4-12.3l35-58.3H128c-35.3 0-64-28.7-64-64V64c0-35.3 28.7-64 64-64z"})
);

export default LanVideoDownToLineSolid;
