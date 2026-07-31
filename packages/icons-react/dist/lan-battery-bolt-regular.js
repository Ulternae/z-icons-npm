import React from 'react';

export const LanBatteryBoltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M112 448c-44.2 0-80-35.8-80-80V144c0-44.2 35.8-80 80-80h191.5l-52.6 48H112c-17.7 0-32 14.3-32 32v224c0 17.7 14.3 32 32 32h76.1c-5.6 15.9-5.4 32.8 0 48zm339.9-336c5.6-15.9 5.4-32.8 0-48H528c44.2 0 80 35.8 80 80v48c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32v48c0 44.2-35.8 80-80 80H336.5l52.6-48H528c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-54.4-43.8c9.2 6.3 12.9 18 8.9 28.4L354.8 232H440c9.9 0 18.8 6.1 22.4 15.3s1.1 19.7-6.2 26.4l-184 168c-8.2 7.5-20.5 8.4-29.7 2.1s-12.9-18-8.9-28.4L285.2 280H200c-9.9 0-18.8-6.1-22.4-15.3s-1.1-19.7 6.2-26.4l184-168c8.2-7.5 20.5-8.4 29.7-2.1"})
);

export default LanBatteryBoltRegular;
