import React from 'react';

export const LanPedestalSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M96 0C60.7 0 32 28.7 32 64v384c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32V64c0-35.3-28.7-64-64-64zm32 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48m168 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0"})
);

export default LanPedestalSolid;
