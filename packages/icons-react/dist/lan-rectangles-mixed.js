import React from 'react';

export const LanRectanglesMixed = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M240 96c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-96c0-8.8 7.2-16 16-16zM48 64C21.5 64 0 85.5 0 112v96c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48zm416 32c8.8 0 16 7.2 16 16v256c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm-64-32c-26.5 0-48 21.5-48 48v256c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM112 352h128c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H112c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16m-48 16v64c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48H112c-26.5 0-48 21.5-48 48"})
);

export default LanRectanglesMixed;
