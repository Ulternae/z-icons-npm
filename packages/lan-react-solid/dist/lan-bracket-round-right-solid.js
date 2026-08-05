import React from 'react';

export function LanBracketRoundRightSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 192 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M37.4 46.2c-9.8 14.8-5.8 34.6 8.9 44.4C71.9 107.7 128 167 128 256S71.9 404.3 46.3 421.4c-14.7 9.8-18.7 29.7-8.9 44.4s29.7 18.7 44.4 8.9C120.1 449 192 371.8 192 256S120.1 62.9 81.8 37.4c-14.7-9.8-34.6-5.8-44.4 8.9z"})
  );
}

export default LanBracketRoundRightSolid;
