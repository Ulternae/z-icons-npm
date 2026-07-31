import React from 'react';

export const LanGameBoardThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M390.5 32.3C422.8 35.6 448 62.9 448 96v320l-.3 6.5c-3.1 30.1-27 54.1-57.1 57.1l-6.5.3h-320l-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416V96c0-33.1 25.2-60.4 57.5-63.7L64 32h320zM16 416c0 26.5 21.5 48 48 48h48v-96H16zm112 48h88v-96h-88zm208 0h48c26.5 0 48-21.5 48-48v-48h-96zm-104 0h88v-96h-88zM16 352h96v-88H16zm112 0h88v-88h-88zm208 0h96v-88h-96zm-104 0h88v-88h-88zM16 248h96v-88H16zm112 0h88v-88h-88zm208 0h96v-88h-96zm-104 0h88v-88h-88zM64 48c-26.5 0-48 21.5-48 48v48h96V48zm64 96h88V48h-88zm208 0h96V96c0-26.5-21.5-48-48-48h-48zm-104 0h88V48h-88z"})
);

export default LanGameBoardThin;
