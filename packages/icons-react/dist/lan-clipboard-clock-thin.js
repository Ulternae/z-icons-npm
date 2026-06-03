import React from 'react';

export const LanClipboardClockThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M288 80c17.7 0 32-14.3 32-32s-14.3-32-32-32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0 16H160c-26.5 0-48-21.5-48-48H96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h169.7c3.2 5.5 6.6 10.9 10.3 16H96c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h18.7c6.6-18.6 24.4-32 45.3-32h128c20.9 0 38.7 13.4 45.3 32H352c35.3 0 64 28.7 64 64v112.7c-5.4.4-10.7 1.1-16 2V96c0-26.5-21.5-48-48-48h-16c0 26.5-21.5 48-48 48m144 432a128 128 0 1 0 0-256 128 128 0 1 0 0 256m0-272a144 144 0 1 1 0 288 144 144 0 1 1 0-288m0 64c4.4 0 8 3.6 8 8v64h48c4.4 0 8 3.6 8 8s-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-72c0-4.4 3.6-8 8-8"})
);

export default LanClipboardClockThin;
