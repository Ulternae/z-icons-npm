import React from 'react';

export function LanBorderRightThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M440 480c4.4 0 8-3.6 8-8V40c0-4.4-3.6-8-8-8s-8 3.6-8 8v432c0 4.4 3.6 8 8 8M320 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0 352a16 16 0 1 0 0 32 16 16 0 1 0 0-32M128 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0 352a16 16 0 1 0 0 32 16 16 0 1 0 0-32m96-352a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0 352a16 16 0 1 0 0 32 16 16 0 1 0 0-32M32 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0 352a16 16 0 1 0 0 32 16 16 0 1 0 0-32m0-160a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-128a16 16 0 1 0 0 32 16 16 0 1 0 0-32m0 224a16 16 0 1 0 0-32 16 16 0 1 0 0 32"})
  );
}

export default LanBorderRightThin;
