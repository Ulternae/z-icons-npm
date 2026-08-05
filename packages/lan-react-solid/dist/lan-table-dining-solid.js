import React from 'react';

export function LanTableDiningSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M544.1 416c0 17.7-14.3 32-32 32s-32-14.3-32-32V288h-384v128c0 17.7-14.3 32-32 32s-32-14.3-32-32V208h512zm-23-352c13.8 0 26 8.8 30.3 21.9l10.7 32c6.9 20.7-8.5 42.1-30.3 42.1H44.5c-21.8 0-37.2-21.4-30.3-42.1l10.7-32C29.2 72.8 41.4 64 55.2 64z"})
  );
}

export default LanTableDiningSolid;
