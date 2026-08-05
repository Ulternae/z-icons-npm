import React from 'react';

export function LanRulerVerticalRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 256 576',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M48 496V16h160v48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h72v64h-40c-13.3 0-24 10.7-24 24s10.7 24 24 24h40v64h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h72v64h-40c-13.3 0-24 10.7-24 24s10.7 24 24 24h40v48zm-48 0c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48V16c0-26.5-21.5-48-48-48H48C21.5-32 0-10.5 0 16z"})
  );
}

export default LanRulerVerticalRegular;
