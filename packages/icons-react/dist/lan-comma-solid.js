import React from 'react';

export const LanCommaSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 192 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M160 350.4V349c0-33.7-27.3-61-61-61-29.5 0-54.8 21.1-60.1 50.1l-22.2 122c-.5 2.6-.7 5.2-.7 7.9v8.2c0 19.8 16.1 35.9 35.9 35.9 12.5 0 24.1-6.5 30.6-17.2L150.8 383c6-9.8 9.2-21.1 9.2-32.6"})
);

export default LanCommaSolid;
