import React from 'react';

export const LanBatteryExclamationSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M247 64c-4.6 10.6-7.1 22.2-6.6 34.5l1.1 29.4H112.1c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16h134.7c-4.3 9.8-6.7 20.6-6.7 32s2.4 22.2 6.7 32L112 448c-44.2 0-80-35.8-80-80V144c0-44.2 35.8-80 80-80zm73 384a32 32 0 1 1 0-64 32 32 0 1 1 0 64M528 64c44.2 0 80 35.8 80 80v48c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32v48c0 44.2-35.8 80-80 80H393.3c4.3-9.8 6.7-20.6 6.7-32s-2.4-22.2-6.7-32H528c8.8 0 16-7.2 16-16V144c0-8.8-7.2-16-16-16H398.6l1.1-29.4c.4-12.3-2-24-6.6-34.5zm-208 0c18 0 32.3 14.9 31.7 32.8l-7.7 216c-.5 12.9-11.1 23.1-24 23.2-12.9 0-23.5-10.2-24-23.2l-7.7-216C287.7 78.9 302 64 320 64"})
);

export default LanBatteryExclamationSolid;
