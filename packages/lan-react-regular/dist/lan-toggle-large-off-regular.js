import React from 'react';

export function LanToggleLargeOffRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M192 400a144 144 0 1 1 0-288 144 144 0 1 1 0 288m0 48h192c106 0 192-86 192-192S490 64 384 64H192C86 64 0 150 0 256s86 192 192 192m127-48c39.9-35.2 65-86.7 65-144s-25.1-108.8-65-144h65c79.5 0 144 64.5 144 144s-64.5 144-144 144z"})
  );
}

export default LanToggleLargeOffRegular;
