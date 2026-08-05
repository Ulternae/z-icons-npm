import React from 'react';

export function LanPlusLarge({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M272 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v224H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h224v224c0 8.8 7.2 16 16 16s16-7.2 16-16V272h224c8.8 0 16-7.2 16-16s-7.2-16-16-16H272z"})
  );
}

export default LanPlusLarge;
