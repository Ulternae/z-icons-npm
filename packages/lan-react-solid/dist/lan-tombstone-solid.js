import React from 'react';

export function LanTombstoneSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 192C32 86 118 0 224 0s192 86 192 192v256c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32zm216-72c0-13.3-10.7-24-24-24s-24 10.7-24 24v40h-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h48v120c0 13.3 10.7 24 24 24s24-10.7 24-24V208h48c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48z"})
  );
}

export default LanTombstoneSolid;
