import React from 'react';

export function LanCircleThreeQuartersStrokeRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M461.6 288H280c-30.9 0-56-25.1-56-56V50.4C124.3 65.8 48 152 48 256c0 114.9 93.1 208 208 208 104 0 190.2-76.3 205.6-176m1.8-48C455.6 137.9 374.1 56.4 272 48.6V232c0 4.4 3.6 8 8 8zM0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0"})
  );
}

export default LanCircleThreeQuartersStrokeRegular;
