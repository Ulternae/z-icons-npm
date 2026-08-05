import React from 'react';

export function LanBorderNoneThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 432a16 16 0 1 0 0 32 16 16 0 1 0 0-32m96-384a16 16 0 1 0 0 32 16 16 0 1 0 0-32m0 384a16 16 0 1 0 0 32 16 16 0 1 0 0-32m192 32a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-416a16 16 0 1 0 0 32 16 16 0 1 0 0-32m-96 416a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-416a16 16 0 1 0 0 32 16 16 0 1 0 0-32m192 416a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-384a16 16 0 1 0 0-32 16 16 0 1 0 0 32M32 48a16 16 0 1 0 0 32 16 16 0 1 0 0-32m384 224a16 16 0 1 0 0-32 16 16 0 1 0 0 32M32 240a16 16 0 1 0 0 32 16 16 0 1 0 0-32m384 128a16 16 0 1 0 0-32 16 16 0 1 0 0 32M32 336a16 16 0 1 0 0 32 16 16 0 1 0 0-32m384-160a16 16 0 1 0 0-32 16 16 0 1 0 0 32M32 144a16 16 0 1 0 0 32 16 16 0 1 0 0-32"})
  );
}

export default LanBorderNoneThin;
