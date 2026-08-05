import React from 'react';

export function LanMapPin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M160 256a112 112 0 1 0 0-224 112 112 0 1 0 0 224m144-112c0 74.1-56 135.2-128 143.1V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V287.1c-72-7.9-128-69-128-143.1C16 64.5 80.5 0 160 0s144 64.5 144 144m-192 0c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80 8.8 0 16 7.2 16 16s-7.2 16-16 16c-26.5 0-48 21.5-48 48"})
  );
}

export default LanMapPin;
