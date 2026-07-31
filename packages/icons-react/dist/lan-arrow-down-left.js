import React from 'react';

export const LanArrowDownLeft = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16 448c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16s16 7.2 16 16v217.4L356.7 68.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L54.6 416H272c8.8 0 16 7.2 16 16s-7.2 16-16 16z"})
);

export default LanArrowDownLeft;
