import React from 'react';

export const LanIndianRupeeSign = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 48c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16s-7.2 16-16 16H202.5c28.7 23.2 48.3 57.3 52.6 96H304c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48.9c-8 72-69 128-143.1 128H65.9l183.4 131c7.2 5.1 8.9 15.1 3.7 22.3s-15.1 8.9-22.3 3.7L6.7 317C1 313-1.4 305.7.8 299.1S9 288 16 288h96c56.4 0 103.1-41.7 110.9-96H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h206.9c-7.8-54.3-54.4-96-110.9-96H16C7.2 64 0 56.8 0 48"})
);

export default LanIndianRupeeSign;
