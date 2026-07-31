import React from 'react';

export const LanExpandArrows = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M304 32c-8.8 0-16 7.2-16 16s7.2 16 16 16h89.4L224 233.4 54.6 64H144c8.8 0 16-7.2 16-16s-7.2-16-16-16H16C7.2 32 0 39.2 0 48v128c0 8.8 7.2 16 16 16s16-7.2 16-16V86.6L201.4 256 32 425.4V336c0-8.8-7.2-16-16-16s-16 7.2-16 16v128c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16H54.6L224 278.6 393.4 448H304c-8.8 0-16 7.2-16 16s7.2 16 16 16h128c8.8 0 16-7.2 16-16V336c0-8.8-7.2-16-16-16s-16 7.2-16 16v89.4L246.6 256 416 86.6V176c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16z"})
);

export default LanExpandArrows;
