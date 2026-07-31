import React from 'react';

export const LanArrowUpToLine = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16h352c8.8 0 16-7.2 16-16s-7.2-16-16-16zm187.3 132.7c-6.2-6.2-16.4-6.2-22.6 0l-144 144c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L176 182.6V496c0 8.8 7.2 16 16 16s16-7.2 16-16V182.6l116.7 116.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6z"})
);

export default LanArrowUpToLine;
