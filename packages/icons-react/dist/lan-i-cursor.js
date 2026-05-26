import React from 'react';

export const LanICursor = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 256 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 14.9C-.6 23.7 6 31.3 14.9 32l8 .6c50.2 3.5 89.1 45.3 89.1 95.7V240H64c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v111.7c0 50.4-38.9 92.2-89.2 95.8l-8 .6c-8.8.6-15.4 8.2-14.8 17s8.3 15.5 17.1 14.9l8-.6c44.6-3.2 82.5-29 102.9-65.7 20.4 36.7 58.3 62.5 102.9 65.7l8 .6c8.8.6 16.5-6 17.1-14.8s-6-16.5-14.8-17.1l-8-.6c-50.2-3.6-89.2-45.4-89.2-95.8V272h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48V128.3c0-50.4 38.9-92.2 89.2-95.8l8-.6c8.8-.6 15.4-8.3 14.8-17.1S247.7-.6 238.9 0l-8 .6c-44.6 3.2-82.5 29-102.9 65.7C107.6 29.6 69.7 3.8 25.1.6l-8-.6C8.3-.6.7 6 0 14.9"})
);

export default LanICursor;
