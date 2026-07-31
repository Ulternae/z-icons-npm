import React from 'react';

export const LanTableColumns = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M384 64c17.7 0 32 14.3 32 32v64H32V96c0-17.7 14.3-32 32-32zM0 160v256c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm416 256c0 17.7-14.3 32-32 32H240V192h176zm-208 32H64c-17.7 0-32-14.3-32-32V192h176z"})
);

export default LanTableColumns;
