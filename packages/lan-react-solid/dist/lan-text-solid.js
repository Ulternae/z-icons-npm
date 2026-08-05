import React from 'react';

export function LanTextSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 96v32c0 17.7-14.3 32-32 32S0 145.7 0 128V72c0-22.1 17.9-40 40-40h304c22.1 0 40 17.9 40 40v56c0 17.7-14.3 32-32 32s-32-14.3-32-32V96h-96v320h48c17.7 0 32 14.3 32 32s-14.3 32-32 32H112c-17.7 0-32-14.3-32-32s14.3-32 32-32h48V96z"})
  );
}

export default LanTextSolid;
