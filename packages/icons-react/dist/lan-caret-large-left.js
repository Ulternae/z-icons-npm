import React from 'react';

export const LanCaretLargeLeft = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 256 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M9.9 278.6c-12.5-12.5-12.5-32.8 0-45.2l160-160c9.2-9.2 22.9-11.9 34.9-6.9s19.7 16.6 19.7 29.5v320c0 12.9-7.8 24.6-19.8 29.6-10.5 4.3-22.3 2.8-31.3-3.8l-3.6-3.1-160-160zM192.5 416V96l-160 160z"})
);

export default LanCaretLargeLeft;
