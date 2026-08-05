import React from 'react';

export function LanRugSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M24 64h56v384H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h8v-40h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h8v-32h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h8v-32h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h8v-40h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24m104 0h320v384H128zm448 24c0 13.3-10.7 24-24 24h-8v40h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v32h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v32h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v40h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-56V64h56c13.3 0 24 10.7 24 24"})
  );
}

export default LanRugSolid;
