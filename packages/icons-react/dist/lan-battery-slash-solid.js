import React from 'react';

export const LanBatterySlashSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.95 640 576.1',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M73-24.9c-9.4-9.4-24.6-9.4-33.9 0S29.7-.3 39 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-56.8-56.8c36.4-7.5 63.8-39.7 63.8-78.4v-48c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32v-48c0-44.2-35.8-80-80-80H161.8zM225.8 128H528c8.8 0 16 7.2 16 16v224c0 8.8-7.2 16-16 16h-46.2zm120.4 256H112c-8.8 0-16-7.2-16-16V144c0-2.9.8-5.7 2.2-8L52.6 90.4C39.8 104.6 32 123.4 32 144v224c0 44.2 35.8 80 80 80h298.2z"})
);

export default LanBatterySlashSolid;
