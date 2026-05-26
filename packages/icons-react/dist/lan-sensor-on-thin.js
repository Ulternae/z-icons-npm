import React from 'react';

export const LanSensorOnThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M384 48c26.5 0 48 21.5 48 48v320c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm24 96c-4.4 0-8 3.6-8 8v112c0 4.4 3.6 8 8 8s8-3.6 8-8V136c0-4.4-3.6-8-8-8m64 0c-4.4 0-8 3.6-8 8v112c0 4.4 3.6 8 8 8s8-3.6 8-8V136c0-4.4-3.6-8-8-8m452.1-49.1c3.8-2.3 5-7.2 2.7-11s-7.2-5-11-2.7l-80 48c-3.8 2.3-5 7.2-2.7 11s7.2 5 11 2.7zM520 248c-4.4 0-8 3.6-8 8s3.6 8 8 8h112c4.4 0 8-3.6 8-8s-3.6-8-8-8zm4.1 137.1c-3.8-2.3-8.7-1-11 2.7s-1 8.7 2.7 11l80 48c3.8 2.3 8.7 1 11-2.7s1-8.7-2.7-11z"})
);

export default LanSensorOnThin;
