import React from 'react';

export const LanTimesToSlotSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 96c0-35.3 28.7-64 64-64h256c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64zm259.9 78.1c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-33.9 33.9-33.9-33.9c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l33.9 33.9-33.9 33.9c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l33.9-33.9 33.9 33.9c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L322 208zM48 312v104c0 8.8 7.2 16 16 16h448c8.8 0 16-7.2 16-16V312c0-13.3 10.7-24 24-24s24 10.7 24 24v104c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V312c0-13.3 10.7-24 24-24s24 10.7 24 24"})
);

export default LanTimesToSlotSolid;
