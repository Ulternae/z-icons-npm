import React from 'react';

export const LanTintSlashRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.95 576 576.1',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L463.6 397.8C474.1 374 480 347.7 480 320c0-91.2-130.2-274.1-166.6-323.5-5.9-8-15.2-12.5-25.2-12.5h-.4c-10 0-19.3 4.5-25.2 12.5-15.6 21.2-48.5 66.9-80.9 119.4zm175.6 175.7c25.9-42.8 53-81.9 71.4-107.5 20.6 28.8 52.3 74.7 80.9 123.6 18 30.6 34.2 61.5 45.8 89.5 12.1 29.1 17.2 50.5 17.2 63.7 0 14-2 27.6-5.7 40.4zM369.1 439c-23.1 15.8-51 25-81.1 25-79.5 0-144-64.5-144-144 0-13.2 5.2-34.6 17.2-63.7 2.4-5.7 5-11.6 7.7-17.6l-36-36c-21.6 43.8-37 85.9-37 117.2 0 106 86 192 192 192 43.4 0 83.4-14.4 115.5-38.6z"})
);

export default LanTintSlashRegular;
