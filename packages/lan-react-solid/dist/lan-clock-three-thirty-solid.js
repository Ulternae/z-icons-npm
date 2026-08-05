import React from 'react';

export function LanClockThreeThirtySolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 0a256 256 0 1 0 0 512 256 256 0 1 0 0-512m-24 392V256c0-13.3 10.7-24 24-24h104c13.3 0 24 10.7 24 24s-10.7 24-24 24h-80v112c0 13.3-10.7 24-24 24s-24-10.7-24-24"})
  );
}

export default LanClockThreeThirtySolid;
