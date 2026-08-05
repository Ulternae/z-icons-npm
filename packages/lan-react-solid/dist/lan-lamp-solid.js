import React from 'react';

export function LanLampSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M82.5 51.7C87.4 39.8 99.1 32 112 32h224c12.9 0 24.6 7.8 29.5 19.7l80 192c4.1 9.9 3 21.2-2.9 30.1S426.7 288 416 288H32c-10.7 0-20.7-5.3-26.6-14.2s-7-20.2-2.9-30.1zM124.1 336H324c17.6 21.9 28.1 49.7 28.1 80 0 38.2-16.8 72.5-43.3 96H139.5c-26.6-23.5-43.3-57.8-43.3-96 0-30.3 10.5-58.1 28.1-80z"})
  );
}

export default LanLampSolid;
