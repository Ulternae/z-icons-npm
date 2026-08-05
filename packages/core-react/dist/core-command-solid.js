import React from 'react';

export function CoreCommandSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M224 160v-48C224 50.1 173.9 0 112 0S0 50.1 0 112s50.1 112 112 112h48v64h-48C50.1 288 0 338.1 0 400s50.1 112 112 112 112-50.1 112-112v-48h64v48c0 61.9 50.1 112 112 112s112-50.1 112-112-50.1-112-112-112h-48v-64h48c61.9 0 112-50.1 112-112S461.9 0 400 0 288 50.1 288 112v48zm64 128h-64v-64h64z"})
  );
}

export default CoreCommandSolid;
