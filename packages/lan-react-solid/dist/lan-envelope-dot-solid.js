import React from 'react';

export function LanEnvelopeDotSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M496 0a80 80 0 1 1 0 160 80 80 0 1 1 0-160M80 64h289c-.7 5.2-1 10.6-1 16 0 56.9 37.1 105 88.3 121.7L316.8 306.4a48 48 0 0 1-57.6 0l-208-156C39.1 141.3 32 127.1 32 112c0-26.5 21.5-48 48-48m265.6 280.8 191.3-143.5c2.4-.8 4.8-1.7 7.1-2.6V384c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V196l198.4 148.8c34.1 25.6 81.1 25.6 115.2 0"})
  );
}

export default LanEnvelopeDotSolid;
