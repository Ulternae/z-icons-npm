import React from 'react';

export function LanTape({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 64a192 192 0 1 1 0 384 192 192 0 1 1 0-384m115.4 384C436.5 408.8 480 337.5 480 256c0-123.7-100.3-224-224-224S32 132.3 32 256s100.3 224 224 224h304c8.8 0 16-7.2 16-16s-7.2-16-16-16zM256 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128m0 160a96 96 0 1 0 0-192 96 96 0 1 0 0 192"})
  );
}

export default LanTape;
