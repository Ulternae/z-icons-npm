import React from 'react';

export function LanPlayFlipRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M396.4 37.6C408.5 44.8 416 57.9 416 72v368c0 14.1-7.5 27.2-19.6 34.4s-27.2 7.5-39.6.7l-336-184C8 284.1 0 270.6 0 256s8-28.1 20.8-35.1l336-184c12.4-6.8 27.4-6.5 39.6.7M368 85.5 56.7 256 368 426.5z"})
  );
}

export default LanPlayFlipRegular;
