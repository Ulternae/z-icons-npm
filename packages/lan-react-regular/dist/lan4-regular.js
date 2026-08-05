import React from 'react';

export function Lan4Regular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M320 56c0-13.3-10.7-24-24-24s-24 10.7-24 24v248H64c-8.8 0-16-7.2-16-16V56c0-13.3-10.7-24-24-24S0 42.7 0 56v232c0 35.3 28.7 64 64 64h208v104c0 13.3 10.7 24 24 24s24-10.7 24-24V352h40c13.3 0 24-10.7 24-24s-10.7-24-24-24h-40z"})
  );
}

export default Lan4Regular;
