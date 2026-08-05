import React from 'react';

export function LanIntersectionRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M24 480c13.3 0 24-10.7 24-24V224c0-79.5 64.5-144 144-144s144 64.5 144 144v232c0 13.3 10.7 24 24 24s24-10.7 24-24V224c0-106-86-192-192-192S0 118 0 224v232c0 13.3 10.7 24 24 24"})
  );
}

export default LanIntersectionRegular;
