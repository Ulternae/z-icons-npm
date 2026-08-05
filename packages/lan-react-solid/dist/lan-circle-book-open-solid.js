import React from 'react';

export function LanCircleBookOpenSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512M141 144c32.9 0 65.4 7.5 95 22v208c-29.6-14.5-62.1-22-95-22h-5c-13.3 0-24-10.7-24-24V168c0-13.3 10.7-24 24-24zm230 208c-32.9 0-65.4 7.5-95 22V166c29.6-14.5 62.1-22 95-22h5c13.3 0 24 10.7 24 24v160c0 13.3-10.7 24-24 24z"})
  );
}

export default LanCircleBookOpenSolid;
