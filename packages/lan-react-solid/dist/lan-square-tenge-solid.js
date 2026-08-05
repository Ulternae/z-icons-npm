import React from 'react';

export function LanSquareTengeSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm64 96h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H128c-8.8 0-16-7.2-16-16s7.2-16 16-16m8 64h176c13.3 0 24 10.7 24 24s-10.7 24-24 24h-64v120c0 13.3-10.7 24-24 24s-24-10.7-24-24V240h-64c-13.3 0-24-10.7-24-24s10.7-24 24-24"})
  );
}

export default LanSquareTengeSolid;
