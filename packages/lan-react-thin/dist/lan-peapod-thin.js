import React from 'react';

export function LanPeapodThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M416 16C195.1 16 16 195.1 16 416v48c0 17.7 14.3 32 32 32h48c220.9 0 400-179.1 400-400V48c0-17.7-14.3-32-32-32zm0-16h48c26.5 0 48 21.5 48 48v48c0 229.8-186.2 416-416 416H48c-26.5 0-48-21.5-48-48v-48C0 186.2 186.2 0 416 0M304 144a64 64 0 1 1 128 0 64 64 0 1 1-128 0m64 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96m-112 0a64 64 0 1 1 0 128 64 64 0 1 1 0-128m48 64a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-160 48a64 64 0 1 1 0 128 64 64 0 1 1 0-128m48 64a48 48 0 1 0-96 0 48 48 0 1 0 96 0"})
  );
}

export default LanPeapodThin;
