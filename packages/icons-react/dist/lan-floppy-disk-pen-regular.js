import React from 'react';

export const LanFloppyDiskPenRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M128.1 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h165.5q-5.7 12.15-8.4 25.5l-4.5 22.5H128.1c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h242.7c17 0 33.3 6.7 45.3 18.7l77.2 77.3c12 12 18.7 28.3 18.7 45.3V211c-9.3 4.8-18.1 11.2-25.9 19L464 252.1v-78.7c0-4.2-1.7-8.3-4.7-11.3L384 86.8v89.4c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32v-96h-32zm80 0v80h128V80zm16 240a64 64 0 1 1 128 0 64 64 0 1 1-128 0m108.2 147c2.5-12.4 8.6-23.8 17.5-32.7l118.9-118.9 80 80-118.9 118.9c-8.9 8.9-20.3 15-32.7 17.5l-59.6 11.9c-.9.2-1.9.3-2.9.3-8 0-14.6-6.5-14.6-14.6 0-1 .1-1.9.3-2.9zm267.8-123-28.8 28.8-80-80 28.8-28.8c22.1-22.1 57.9-22.1 80 0s22.1 57.9 0 80"})
);

export default LanFloppyDiskPenRegular;
