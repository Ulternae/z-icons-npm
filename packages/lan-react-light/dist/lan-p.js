import React from 'react';

export function LanP({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 48c0-8.8 7.2-16 16-16h160c79.5 0 144 64.5 144 144s-64.5 144-144 144H32v144c0 8.8-7.2 16-16 16s-16-7.2-16-16zm32 240h144c61.9 0 112-50.1 112-112S237.9 64 176 64H32z"})
  );
}

export default LanP;
