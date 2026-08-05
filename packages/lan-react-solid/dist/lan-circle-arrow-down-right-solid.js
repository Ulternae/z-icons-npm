import React from 'react';

export function LanCircleArrowDownRightSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 0a256 256 0 1 0 0 512 256 256 0 1 0 0-512m48 216c0-13.3 10.7-24 24-24s24 10.7 24 24v112c0 13.3-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h54.1l-103-103c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l103 103z"})
  );
}

export default LanCircleArrowDownRightSolid;
