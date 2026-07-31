import React from 'react';

export const LanArrowUTurnRightDown = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M416.5 512c4.2 0 8.3-1.7 11.3-4.7l128-128c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L432.5 457.4V184c0-101.6-82.4-184-184-184s-184 82.4-184 184v248l.3 3.2c1.5 7.3 8 12.8 15.7 12.8s14.2-5.5 15.7-12.8l.3-3.2V184c0-83.9 68.1-152 152-152s152 68.1 152 152v273.4L299.8 356.7l-2.5-2.1c-6.2-4.1-14.7-3.4-20.1 2.1s-6.2 13.9-2.1 20.1l2.1 2.5 128 128c3 3 7.1 4.7 11.3 4.7"})
);

export default LanArrowUTurnRightDown;
