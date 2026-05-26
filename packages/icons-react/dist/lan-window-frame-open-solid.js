import React from 'react';

export const LanWindowFrameOpenSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M416 224V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64v224h384zm-224 0H96V64h96zm64 0V64h96v160zM96 448V336H32v112c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32V336h-64v112z"})
);

export default LanWindowFrameOpenSolid;
