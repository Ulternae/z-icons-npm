import React from 'react';

export function LanBoldRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M24 32C10.7 32 0 42.7 0 56s10.7 24 24 24h40v352H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h236c68.5 0 124-55.5 124-124 0-48.9-28.3-91.1-69.3-111.3 23-22.5 37.3-53.9 37.3-88.7 0-68.5-55.5-124-124-124zm280 124c0 42-34 76-76 76H112V80h116c42 0 76 34 76 76M112 432V280h148c42 0 76 34 76 76s-34 76-76 76z"})
  );
}

export default LanBoldRegular;
