import React from 'react';

export function LanFilmAltThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M96 136V48H64c-26.5 0-48 21.5-48 48v40zm-80 16v96h80v-96zm-16 0V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm16 112v96h80v-96zm80 112H16v40c0 26.5 21.5 48 48 48h32zm16 88h224V48H112zM352 48v96h80V96c0-26.5-21.5-48-48-48zm80 112h-80v88h80zm0 104h-80v96h80zm0 112h-80v88h32c26.5 0 48-21.5 48-48z"})
  );
}

export default LanFilmAltThin;
