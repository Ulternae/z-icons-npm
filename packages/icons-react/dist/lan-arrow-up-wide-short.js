import React from 'react';

export const LanArrowUpWideShort = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M139.3 36.7c-6.2-6.2-16.4-6.2-22.6 0l-96 96c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L112 86.6V464c0 8.8 7.2 16 16 16s16-7.2 16-16V86.6l68.7 68.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6zM304 480h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16m0-136h128c8.8 0 16-7.2 16-16s-7.2-16-16-16H304c-8.8 0-16 7.2-16 16s7.2 16 16 16m0-144h192c8.8 0 16-7.2 16-16s-7.2-16-16-16H304c-8.8 0-16 7.2-16 16s7.2 16 16 16m0-136h256c8.8 0 16-7.2 16-16s-7.2-16-16-16H304c-8.8 0-16 7.2-16 16s7.2 16 16 16"})
);

export default LanArrowUpWideShort;
