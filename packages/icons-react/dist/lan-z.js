import React from 'react';

export const LanZ = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 48c0-8.8 7.2-16 16-16h352c6.2 0 11.9 3.6 14.5 9.3s1.7 12.3-2.3 17.1L50.5 448H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-6.2 0-11.9-3.6-14.5-9.3s-1.7-12.3 2.3-17.1L333.5 64H16C7.2 64 0 56.8 0 48"})
);

export default LanZ;
