import React from 'react';

export function LanLandmarkFlagRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 512 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M272-32h80c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-80v48h184c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v208h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H56c-13.3 0-24-10.7-24-24s10.7-24 24-24h8V160h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h168V-16c0-8.8 7.2-16 16-16zM112 368h64V160h-64zm112 0h64V160h-64zm112 0h64V160h-64zM24 464h464c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24"})
  );
}

export default LanLandmarkFlagRegular;
