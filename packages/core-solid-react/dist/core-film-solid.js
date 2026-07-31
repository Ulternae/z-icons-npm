import React from 'react';

export function CoreFilmSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M380 96h68v68h-68zm0 196v-72h68v72zm0 56h68v68h-68zM64 96h68v68H64zm0 124h68v72H64zm0 128h68v68H64zm0-316C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64z"})
  );
}

export default CoreFilmSolid;
