import React from 'react';

export const LanParagraphSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M160 0h256c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32v416c0 17.7-14.3 32-32 32s-32-14.3-32-32V64h-48v416c0 17.7-14.3 32-32 32s-32-14.3-32-32V320h-48C71.6 320 0 248.4 0 160S71.6 0 160 0"})
);

export default LanParagraphSolid;
