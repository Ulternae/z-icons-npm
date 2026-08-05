import React from 'react';

export function LanFluxCapacitorRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M384 80c8.8 0 16 7.2 16 16v320c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm90.8 188.8L200 266v27.4c-18.9 9-32 28.3-32 50.6 0 30.9 25.1 56 56 56s56-25.1 56-56c0-22.3-13.1-41.6-32-50.6V266l45.2-45.2c5.9 2.1 12.2 3.2 18.8 3.2 30.9 0 56-25.1 56-56s-25.1-56-56-56-56 25.1-56 56c0 6.6 1.1 12.9 3.2 18.8L224 222l-35.2-35.2c2.1-5.9 3.2-12.2 3.2-18.8 0-30.9-25.1-56-56-56s-56 25.1-56 56 25.1 56 56 56c6.6 0 12.9-1.1 18.8-3.2"})
  );
}

export default LanFluxCapacitorRegular;
