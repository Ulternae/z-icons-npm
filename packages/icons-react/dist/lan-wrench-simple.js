import React from 'react';

export const LanWrenchSimple = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M137 2.8c4.4 3 7 7.9 7 13.2v152l48 36 48-36V16c0-5.3 2.6-10.2 7-13.2s9.9-3.6 14.8-1.7C332.9 28.9 384 94.1 384 176c0 71.1-38.6 133.1-96 166.3V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V332.8c0-6 3.4-11.5 8.7-14.2C316.5 292.1 352 238.2 352 176c0-58.9-31.9-107.7-80-134.8V176c0 5-2.4 9.8-6.4 12.8l-64 48a15.9 15.9 0 0 1-19.2 0l-64-48c-4-3-6.4-7.8-6.4-12.8V41.2c-48.1 27-80 75.9-80 134.8 0 62.2 35.4 116.1 87.3 142.6 5.4 2.7 8.7 8.2 8.7 14.2V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V342.3C38.6 309.1 0 247.1 0 176 0 94.1 51.1 28.9 122.2 1.1c4.9-1.9 10.5-1.3 14.8 1.7"})
);

export default LanWrenchSimple;
