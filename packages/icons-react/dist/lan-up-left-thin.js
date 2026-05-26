import React from 'react';

export const LanUpLeftThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M56.2 80c-4.4 0-8 3.6-8 8v289.4c0 7.1 8.6 10.7 13.7 5.7l100.7-100.8c1.5-1.5 3.6-2.4 5.7-2.3s4.2.9 5.7 2.5l153.4 160.3c9.3 9.7 24.8 9.9 34.3.4L412 393c9.4-9.4 9.4-24.6 0-33.9L250.6 197.7c-3.1-3.1-3.1-8.2 0-11.3l92.7-92.7c5-5 1.5-13.7-5.7-13.7zm-24 8c0-13.3 10.7-24 24-24h281.4c21.4 0 32.1 25.9 17 41l-87 87 155.7 155.7c15.6 15.6 15.6 40.9 0 56.6L373 454.5c-15.9 15.9-41.7 15.6-57.2-.6L168.1 299.4l-94.9 94.9c-15.1 15.1-41 4.4-41-17z"})
);

export default LanUpLeftThin;
