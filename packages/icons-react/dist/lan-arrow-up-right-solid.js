import React from 'react';

export const LanArrowUpRightSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M384 96c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32h146.7L9.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L320 173.3V320c0 17.7 14.3 32 32 32s32-14.3 32-32z"})
);

export default LanArrowUpRightSolid;
