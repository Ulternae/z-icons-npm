import React from 'react';

export function LanSlidersHRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M24 72C10.7 72 0 82.7 0 96s10.7 24 24 24h91.7c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H268.3c-10.2-32.5-40.5-56-76.3-56s-66.1 23.5-76.3 56zm0 160c-13.3 0-24 10.7-24 24s10.7 24 24 24h251.7c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56H488c13.3 0 24-10.7 24-24s-10.7-24-24-24h-59.7c-10.2-32.5-40.5-56-76.3-56s-66.1 23.5-76.3 56zm0 160c-13.3 0-24 10.7-24 24s10.7 24 24 24h59.7c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H236.3c-10.2-32.5-40.5-56-76.3-56s-66.1 23.5-76.3 56zm136 56a32 32 0 1 1 0-64 32 32 0 1 1 0 64m192-160a32 32 0 1 1 0-64 32 32 0 1 1 0 64M160 96a32 32 0 1 1 64 0 32 32 0 1 1-64 0"})
  );
}

export default LanSlidersHRegular;
