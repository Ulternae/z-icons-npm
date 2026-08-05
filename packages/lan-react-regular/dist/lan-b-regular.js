import React from 'react';

export function LanBRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M24 32C10.7 32 0 42.7 0 56v400c0 13.3 10.7 24 24 24h172c68.5 0 124-55.5 124-124 0-48.9-28.3-91.1-69.3-111.3 23-22.5 37.3-53.9 37.3-88.7 0-68.5-55.5-124-124-124zm140 200H48V80h116c42 0 76 34 76 76s-34 76-76 76M48 280h148c42 0 76 34 76 76s-34 76-76 76H48z"})
  );
}

export default LanBRegular;
