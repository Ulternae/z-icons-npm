import React from 'react';

export function LanFontRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 32c9.5 0 18 5.5 21.9 14.2L451.1 432H472c13.3 0 24 10.7 24 24s-10.7 24-24 24h-96c-13.3 0-24-10.7-24-24s10.7-24 24-24h22.5l-35.9-80H149.4l-35.9 80H136c13.3 0 24 10.7 24 24s-10.7 24-24 24H40c-13.3 0-24-10.7-24-24s10.7-24 24-24h20.9L234.1 46.2C238 37.5 246.5 32 256 32m0 82.6L171 304h170z"})
  );
}

export default LanFontRegular;
