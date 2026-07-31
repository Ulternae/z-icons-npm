import React from 'react';

export const LanGreaterThanEqual = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M10.8 63.1C2.4 60.2-2 51.1.9 42.8s12-12.8 20.4-9.9l416 144c6.4 2.2 10.8 8.3 10.8 15.1s-4.3 12.9-10.8 15.1l-416 144c-8.4 2.9-17.5-1.5-20.4-9.9s1.5-17.5 9.9-20.4L383.1 192zM432 448c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16z"})
);

export default LanGreaterThanEqual;
