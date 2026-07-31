import React from 'react';

export const LanRectanglesMixedRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M240 112v96H48v-96zM48 64C21.5 64 0 85.5 0 112v96c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48zm416 48v256h-64V112zm-64-48c-26.5 0-48 21.5-48 48v256c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM112 368h128v64H112zm-48 0v64c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48H112c-26.5 0-48 21.5-48 48"})
);

export default LanRectanglesMixedRegular;
