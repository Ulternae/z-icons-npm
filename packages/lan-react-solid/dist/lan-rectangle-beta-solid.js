import React from 'react';

export function LanRectangleBetaSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M576 64c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64zM88 172c-11 0-20 9-20 20v128c0 11 9 20 20 20h40c28.7 0 52-23.3 52-52 0-14.5-6-27.7-15.6-37.1 4.8-7.9 7.6-17 7.6-26.9 0-28.7-23.3-52-52-52zm144 0c-11 0-20 9-20 20v128c0 11 9 20 20 20h64c11 0 20-9 20-20s-9-20-20-20h-44v-24h28c11 0 20-9 20-20s-9-20-20-20h-28v-24h44c11 0 20-9 20-20s-9-20-20-20zm128 0c-11 0-20 9-20 20s9 20 20 20h12v108c0 11 9 20 20 20s20-9 20-20V212h12c11 0 20-9 20-20s-9-20-20-20zm152 0c-24.3 0-44 19.7-44 44v104c0 11 9 20 20 20s20-9 20-20v-28h24v28c0 11 9 20 20 20s20-9 20-20V216c0-24.3-19.7-44-44-44zM124.8 272c8.8 0 16 7.2 16 16s-7.2 16-16 16h-17.6v-32zM528 212c2.2 0 4 1.8 4 4v36h-24v-36c0-2.2 1.8-4 4-4zm-411.2-4c8.8 0 16 7.2 16 16s-7.2 16-16 16h-9.6v-32z"})
  );
}

export default LanRectangleBetaSolid;
