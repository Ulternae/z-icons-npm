import React from 'react';

export function LanSignalAlt1Solid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 384c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32S0 465.7 0 448v-32c0-17.7 14.3-32 32-32"})
  );
}

export default LanSignalAlt1Solid;
