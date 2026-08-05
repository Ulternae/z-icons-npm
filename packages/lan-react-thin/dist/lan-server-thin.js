import React from 'react';

export function LanServerThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M384 48c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48zM64 32C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm224 112a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0 256a16 16 0 1 0 0-32 16 16 0 1 0 0 32m80-16a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-16-240a16 16 0 1 0 0-32 16 16 0 1 0 0 32M64 304h320c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48M0 352v64c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64v-64c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64"})
  );
}

export default LanServerThin;
