import React from 'react';

export const Lan3 = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 272c-8.8 0-16-7.2-16-16s7.2-16 16-16h136c48.6 0 88-39.4 88-88s-39.4-88-88-88H16C7.2 64 0 56.8 0 48s7.2-16 16-16h184c66.3 0 120 53.7 120 120 0 44.5-24.2 83.3-60.1 104 35.9 20.7 60.1 59.5 60.1 104 0 66.3-53.7 120-120 120H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h184c48.6 0 88-39.4 88-88s-39.4-88-88-88z"})
);

export default Lan3;
