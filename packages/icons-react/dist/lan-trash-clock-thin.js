import React from 'react';

export const LanTrashClockThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M205.7 0c-9.8 0-18.6 6-22.3 15.1L163.8 64h184.4l-19.6-48.9C325 6 316.1 0 306.3 0zm-37.2 9.1C174.6-6 189.3-16 205.7-16h100.7c16.4 0 31.1 10 37.1 25.1L365.4 64H472c4.4 0 8 3.6 8 8s-3.6 8-8 8H40c-4.4 0-8-3.6-8-8s3.6-8 8-8h106.6zM83.6 452.7 59.5 128h16l24 323.5c1.9 25.1 22.7 44.5 47.9 44.5h118.3c3.2 5.5 6.6 10.9 10.3 16H147.4c-33.5 0-61.3-25.9-63.8-59.3M432 208h-1.5l5.9-80h16l-6 80.5c-4.8-.4-9.6-.5-14.5-.5zm0 320a128 128 0 1 0 0-256 128 128 0 1 0 0 256m0-272a144 144 0 1 1 0 288 144 144 0 1 1 0-288m0 64c4.4 0 8 3.6 8 8v64h48c4.4 0 8 3.6 8 8s-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-72c0-4.4 3.6-8 8-8"})
);

export default LanTrashClockThin;
