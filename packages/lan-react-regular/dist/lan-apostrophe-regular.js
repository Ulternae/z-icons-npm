import React from 'react';

export function LanApostropheRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 192 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M128 176c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16zm16 46c-5.1 1.3-10.5 2-16 2H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v136c0 66.3-53.7 120-120 120H56c-13.3 0-24-10.7-24-24s10.7-24 24-24h16c39.8 0 72-32.2 72-72z"})
  );
}

export default LanApostropheRegular;
