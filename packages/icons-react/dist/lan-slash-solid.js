import React from 'react';

export const LanSlashSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32.05 576.05 575.963',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M7-25c9.4-9.4 24.6-9.4 33.9 0L569 503c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L7 9C-2.3-.4-2.3-15.6 7-25"})
);

export default LanSlashSolid;
