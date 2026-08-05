import React from 'react';

export function LanPagerThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M448 80c26.5 0 48 21.5 48 48v256c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V128c0-26.5 21.5-48 48-48zM64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm0 264c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8s-3.6-8-8-8H72c-4.4 0-8 3.6-8 8m128 0c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8s-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8M96 144h320c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16m-32 16v64c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32"})
  );
}

export default LanPagerThin;
