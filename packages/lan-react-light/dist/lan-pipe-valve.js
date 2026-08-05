import React from 'react';

export function LanPipeValve({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M272 48c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-96c-8.8 0-16 7.2-16 16s7.2 16 16 16h96v64H32v-16c0-8.8-7.2-16-16-16s-16 7.2-16 16v288c0 8.8 7.2 16 16 16s16-7.2 16-16v-16h448v16c0 8.8 7.2 16 16 16s16-7.2 16-16V176c0-8.8-7.2-16-16-16s-16 7.2-16 16v16H272v-64h96c8.8 0 16-7.2 16-16s-7.2-16-16-16h-96zm-16 176h224v192H32V224z"})
  );
}

export default LanPipeValve;
