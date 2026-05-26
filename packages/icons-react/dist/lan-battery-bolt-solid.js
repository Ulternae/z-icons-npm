import React from 'react';

export const LanBatteryBoltSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M112 448c-44.2 0-80-35.8-80-80V144c0-44.2 35.8-80 80-80h191.5l-70.1 64H112c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16h82.2l-5.5 14.4c-6.3 16.4-6.1 34-.6 49.6zm339.3-334.4c6.3-16.4 6.1-34 .6-49.6H528c44.2 0 80 35.8 80 80v48c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32v48c0 44.2-35.8 80-80 80H336.5l70.1-64H528c8.8 0 16-7.2 16-16V144c0-8.8-7.2-16-16-16h-82.2zm-53.8-45.4c9.2 6.3 12.9 18 8.9 28.4L354.8 232H440c9.9 0 18.8 6.1 22.4 15.3s1.1 19.7-6.2 26.4l-184 168c-8.2 7.5-20.5 8.4-29.7 2.1s-12.9-18-8.9-28.4L285.2 280H200c-9.9 0-18.8-6.1-22.4-15.3s-1.1-19.7 6.2-26.4l184-168c8.2-7.5 20.5-8.4 29.7-2.1"})
);

export default LanBatteryBoltSolid;
