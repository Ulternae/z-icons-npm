import React from 'react';

export function LanSquareDanishKroneRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M384 80c8.8 0 16 7.2 16 16v320c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm80 120c0-13.3-10.7-24-24-24s-24 10.7-24 24v208c0 13.3 10.7 24 24 24s24-10.7 24-24v-38.1l15.8-15.8 35.1 65.2c6.3 11.7 20.8 16 32.5 9.8s16-20.8 9.8-32.5l-42-77.9L233 233c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55V152zm136 40c-13.3 0-24 10.7-24 24v144c0 13.3 10.7 24 24 24s24-10.7 24-24v-81.4c0-8.1 3.2-15.9 9-21.7s13.5-9 21.7-9h9.4c13.3 0 24-10.7 24-24s-10.7-24-24-24h-9.4c-11.3 0-22.3 2.4-32.4 7-3.6-8.8-12.2-15-22.2-15zm64 208a24 24 0 1 0 0-48 24 24 0 1 0 0 48"})
  );
}

export default LanSquareDanishKroneRegular;
