import React from 'react';

export const LanRectanglesMixedSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 112c0-26.5 21.5-48 48-48h192c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm352 0c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v256c0 26.5-21.5 48-48 48h-64c-26.5 0-48-21.5-48-48zM112 320h128c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48"})
);

export default LanRectanglesMixedSolid;
