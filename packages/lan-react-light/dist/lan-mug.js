import React from 'react';

export function LanMug({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M96 96h320v256c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64zm352 0h16c44.2 0 80 35.8 80 80s-35.8 80-80 80h-16zm0 192h16c61.9 0 112-50.1 112-112S525.9 64 464 64H96c-17.7 0-32 14.3-32 32v256c0 53 43 96 96 96h192c53 0 96-43 96-96z"})
  );
}

export default LanMug;
