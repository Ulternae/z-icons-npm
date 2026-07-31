import React from 'react';

export const LanCaretLargeRightSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 256 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M247.1 233.4c12.5 12.5 12.5 32.8 0 45.2l-160 160c-9.2 9.2-22.9 11.9-34.9 6.9S32.5 428.9 32.5 416V96c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.8 7z"})
);

export default LanCaretLargeRightSolid;
