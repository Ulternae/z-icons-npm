import React from 'react';

export function LanDollyFlatbedAltRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 24C0 10.7 10.7 0 24 0h32c30.9 0 56 25.1 56 56v336c0 4.4 3.6 8 8 8h432c13.3 0 24 10.7 24 24s-10.7 24-24 24h-42.7c1.8 5 2.7 10.4 2.7 16 0 26.5-21.5 48-48 48s-48-21.5-48-48c0-5.6 1-11 2.7-16H221.2c1.8 5 2.7 10.4 2.7 16 0 26.5-21.5 48-48 48s-48-21.5-48-48c0-5.6 1-11 2.7-16H120c-30.9 0-56-25.1-56-56V56c0-4.4-3.6-8-8-8H24C10.7 48 0 37.3 0 24m288 88h-64c-8.8 0-16 7.2-16 16v160c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16m64 34c5.1-1.3 10.5-2 16-2h80c35.3 0 64 28.7 64 64v80c0 35.3-28.7 64-64 64h-80c-15.1 0-29-5.3-40-14-11 8.8-24.9 14-40 14h-64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64zm0 62v80c0 8.8 7.2 16 16 16h80c8.8 0 16-7.2 16-16v-80c0-8.8-7.2-16-16-16h-80c-8.8 0-16 7.2-16 16"})
  );
}

export default LanDollyFlatbedAltRegular;
