import React from 'react';

export function CoreListMusicRegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M192 64v64h96V64z","opacity":".4"}), React.createElement("path", {"fill":"currentColor","d":"M128 64c0-35.3 28.7-64 64-64h96c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64h-96v224c0 53-43 96-96 96S0 469 0 416s43-96 96-96c11.2 0 22 1.9 32 5.5zM96 384c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32m96-256h96V64h-96zm416 0H416V64h224v64zm32 320H288v-64h352zm-32-160H416v-64h224v64z"})
  );
}

export default CoreListMusicRegularDuo;
