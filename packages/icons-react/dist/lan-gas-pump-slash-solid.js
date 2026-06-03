import React from 'react';

export const LanGasPumpSlashSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.95 576 576.1',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-63.4-63.4c22.9-12.2 38.5-36.2 38.5-63.8V156.4c0-13.9-5.2-27.4-14.6-37.7l-71.6-78.8c-8.9-9.8-24.1-10.5-33.9-1.6s-10.5 24.1-1.6 33.9l25.8 28.3V160c0 29.8 20.4 54.9 48 62v154c0 13.3-10.7 24-24 24h-6.3L352 286.2V64c0-35.3-28.7-64-64-64H128c-17.2 0-32.8 6.8-44.3 17.8zm92.7 92.7c2.8-2.4 6.4-3.8 10.4-3.8h128c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16h-14.2zM64 465.4c-9.3 3.3-16 12.2-16 22.6 0 13.3 10.7 24 24 24h272c13.3 0 24-10.7 24-24 0-10.5-6.7-19.3-16-22.6v-43.5l-288-288z"})
);

export default LanGasPumpSlashSolid;
