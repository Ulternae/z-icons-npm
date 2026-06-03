import React from 'react';

export const LanClipboardClockRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M264 96c13.3 0 24-10.7 24-24s-10.7-24-24-24h-80c-13.3 0-24 10.7-24 24s10.7 24 24 24zm0 48h-80c-37.1 0-67.6-28-71.6-64H96c-8.8 0-16 7.2-16 16v352c0 8.8 7.2 16 16 16h154.9c6.1 17.3 14.6 33.4 25.1 48H96c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h28.1C137 12.7 159 0 184 0h80c25 0 47 12.7 59.9 32H352c35.3 0 64 28.7 64 64v112.7c-16.7 1.4-32.8 4.9-48 10.3V96c0-8.8-7.2-16-16-16h-16.4c-4 36-34.5 64-71.6 64m24 256a144 144 0 1 1 288 0 144 144 0 1 1-288 0m144-80c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32v-48c0-8.8-7.2-16-16-16"})
);

export default LanClipboardClockRegular;
