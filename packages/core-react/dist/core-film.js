import React from 'react';

export function CoreFilm({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M188 96v320h136V96zm192 68h68V96h-68zm0 56v72h68v-72zm68 128h-68v68h68zM132 96H64v68h68zm0 124H64v72h68zm0 128H64v68h68zM0 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"})
  );
}

export default CoreFilm;
