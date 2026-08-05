import React from 'react';

export function LanRssRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 56c0-13.3 10.7-24 24-24 234.2 0 424 189.8 424 424 0 13.3-10.7 24-24 24s-24-10.7-24-24C400 248.3 231.7 80 24 80 10.7 80 0 69.3 0 56m64 376a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-80a64 64 0 1 1 0 128 64 64 0 1 1 0-128M24 176c154.6 0 280 125.4 280 280 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-128.1-103.9-232-232-232-13.3 0-24-10.7-24-24s10.7-24 24-24"})
  );
}

export default LanRssRegular;
