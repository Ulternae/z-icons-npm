import React from 'react';

export const LanArrowDownRightSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M352 448c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32s-32 14.3-32 32v146.7L54.6 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L274.7 384H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z"})
);

export default LanArrowDownRightSolid;
