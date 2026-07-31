import React from 'react';

export const LanArrowsMinimize = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M4.7 36.7c6.2-6.2 16.4-6.2 22.6 0L160 169.4V80c0-8.8 7.2-16 16-16s16 7.2 16 16v128c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16s7.2-16 16-16h89.4L4.7 59.3c-6.2-6.2-6.2-16.4 0-22.6m438.6 0c6.2 6.2 6.2 16.4 0 22.6L310.6 192H400c8.8 0 16 7.2 16 16s-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16s16 7.2 16 16v89.4L420.7 36.7c6.2-6.2 16.4-6.2 22.6 0M32 304c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16v128c0 8.8-7.2 16-16 16s-16-7.2-16-16v-89.4L27.3 475.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L137.4 320H48c-8.8 0-16-7.2-16-16m224 0c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16h-89.4l132.7 132.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L288 342.6V432c0 8.8-7.2 16-16 16s-16-7.2-16-16z"})
);

export default LanArrowsMinimize;
