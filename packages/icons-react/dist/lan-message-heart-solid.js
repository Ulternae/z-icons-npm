import React from 'react';

export const LanMessageHeartSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 128v224c0 53 43 96 96 96h32v72c0 13.3 10.7 24 24 24 5.2 0 10.2-1.7 14.4-4.8l115.2-86.4c4.2-3.1 9.2-4.8 14.4-4.8h120c53 0 96-43 96-96V128c0-53-43-96-96-96H96C43 32 0 75 0 128m249.6 55.5 6.4 8.5 6.4-8.5c11.1-14.8 28.5-23.5 46.9-23.5 32.4 0 58.7 26.3 58.7 58.7v5.3c0 49.1-65.8 98.1-96.5 118.3-9.5 6.2-21.5 6.2-30.9 0-30.7-20.2-96.5-69.3-96.5-118.3v-5.3c0-32.4 26.3-58.7 58.7-58.7 18.5 0 35.9 8.7 46.9 23.5z"})
);

export default LanMessageHeartSolid;
