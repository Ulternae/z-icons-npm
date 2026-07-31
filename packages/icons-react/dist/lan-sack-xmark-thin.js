import React from 'react';

export const LanSackXmarkThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M351.9 16c8.9 0 16.1 7.2 16.1 16.1 0 2.6-.6 5.2-1.9 7.5L319.5 128h-127l-46.7-88.4c-1.2-2.3-1.9-4.9-1.9-7.5 0-8.9 7.2-16.1 16.1-16.1zM131.7 47l45.4 86C91.1 212.1 16 288.9 16 416.8c0 52.6 42.6 95.2 95.2 95.2h289.6c52.6 0 95.2-42.6 95.2-95.2 0-128-75.1-204.8-161.1-283.8l45.4-86c2.4-4.6 3.7-9.7 3.7-15 0-17.7-14.4-32.1-32.1-32.1L160.1 0C142.4 0 128 14.4 128 32.1c0 5.2 1.3 10.3 3.7 15zM32 416.8C32 296 102.4 223.4 188.8 144h134.4C409.6 223.4 480 296 480 416.8c0 43.7-35.4 79.2-79.2 79.2H111.2C67.4 496 32 460.6 32 416.8m162.3-30.5c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l50.3-50.3 50.3 50.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L267.2 336l50.3-50.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-50.3 50.3-50.3-50.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l50.3 50.3z"})
);

export default LanSackXmarkThin;
