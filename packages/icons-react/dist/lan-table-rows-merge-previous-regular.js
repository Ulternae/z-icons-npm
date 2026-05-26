import React from 'react';

export const LanTableRowsMergePreviousRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448 96c0-35.3-28.7-64-64-64H64C30.9 32 3.6 57.2.3 89.5L0 96v320l.3 6.5c3.1 30.1 27 54.1 57.1 57.1l6.5.3h320c35.3 0 64-28.7 64-64v-320zm-48 320c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V280h48v-48H48V96c0-8.8 7.2-16 16-16h320c8.8 0 16 7.2 16 16v136h-48v48h48zm-95-151c9.4-9.4 9.4-24.6 0-33.9l-64-64-1.8-1.7c-9.4-7.7-23.3-7.1-32.1 1.7l-64 64c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l23-23v86.1c0 13.3 10.7 24 24 24s24-10.7 24-24V242l23 23c9.4 9.4 24.6 9.4 33.9 0z"})
);

export default LanTableRowsMergePreviousRegular;
