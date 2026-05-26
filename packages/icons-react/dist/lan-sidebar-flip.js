import React from 'react';

export const LanSidebarFlip = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M288 96v320h160c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32zm-16-32h176c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64zm-16 32H64c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32h192zm176 64c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16h64c8.8 0 16 7.2 16 16m0 64c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16h64c8.8 0 16 7.2 16 16m0 64c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16h64c8.8 0 16 7.2 16 16"})
);

export default LanSidebarFlip;
