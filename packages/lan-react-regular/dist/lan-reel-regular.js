import React from 'react';

export function LanReelRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 24C32 10.7 42.7 0 56 0h336c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v48h-48V48H112v48H64V48h-8c-13.3 0-24-10.7-24-24m0 464c0-13.3 10.7-24 24-24h8v-48h48v48h224v-48h48v48h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H56c-13.3 0-24-10.7-24-24m56-352h272c13.3 0 24 10.7 24 24s-10.7 24-24 24H88c-13.3 0-24-10.7-24-24s10.7-24 24-24m0 96h336c13.3 0 24 10.7 24 24s-10.7 24-24 24H88c-13.3 0-24-10.7-24-24s10.7-24 24-24M64 352c0-13.3 10.7-24 24-24h272c13.3 0 24 10.7 24 24s-10.7 24-24 24H88c-13.3 0-24-10.7-24-24"})
  );
}

export default LanReelRegular;
