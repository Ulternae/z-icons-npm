import React from 'react';

export function LanObjectsAlignRightRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M512 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v464c0 13.3 10.7 24 24 24s24-10.7 24-24zM336 176H48v-64h288zm48-64c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v64c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48zm-48 288H176v-64h160zm48-64c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48z"})
  );
}

export default LanObjectsAlignRightRegular;
