import React from 'react';

export const LanImageUserSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M384 32c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zM112 368c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16 0-44.2-35.8-80-80-80h-64c-44.2 0-80 35.8-80 80m112-120a56 56 0 1 0 0-112 56 56 0 1 0 0 112"})
);

export default LanImageUserSolid;
