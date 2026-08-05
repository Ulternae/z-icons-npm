import React from 'react';

export function LanGlassEmptyRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M6.3 7.8C10.9 2.8 17.3 0 24 0h336c6.7 0 13.1 2.8 17.7 7.8s6.8 11.6 6.2 18.3l-36.2 420.1c-3.2 37.2-34.4 65.8-71.7 65.8H108c-37.4 0-68.5-28.6-71.7-65.8L.1 26.1c-.6-6.7 1.7-13.4 6.2-18.3M50.2 48l34 394.1c1 12.4 11.4 21.9 23.8 21.9h168c12.5 0 22.8-9.5 23.9-21.9L333.8 48z"})
  );
}

export default LanGlassEmptyRegular;
