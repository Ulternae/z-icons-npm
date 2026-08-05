import React from 'react';

export function LanBracketCurlyLeftSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 256 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 128c0-53 43-96 96-96h32c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32c-17.7 0-32 14.3-32 32v37.5c0 25.5-10.1 49.9-28.1 67.9L77.3 256l22.6 22.6c18 18 28.1 42.4 28.1 67.9V384c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32c-53 0-96-43-96-96v-37.5c0-8.5-3.4-16.6-9.4-22.6L9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3L54.7 188c6-6 9.4-14.1 9.4-22.6z"})
  );
}

export default LanBracketCurlyLeftSolid;
