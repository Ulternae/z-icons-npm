import React from 'react';

export function LanDoNotEnterThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m96 0c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32s-14.3-32-32-32H128c-17.7 0-32 14.3-32 32m-16 0c0-26.5 21.5-48 48-48h256c26.5 0 48 21.5 48 48s-21.5 48-48 48H128c-26.5 0-48-21.5-48-48"})
  );
}

export default LanDoNotEnterThin;
