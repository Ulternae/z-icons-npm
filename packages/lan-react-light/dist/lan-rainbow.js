import React from 'react';

export function LanRainbow({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M320 64C160.9 64 32 192.9 32 352v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80C0 175.3 143.3 32 320 32s320 143.3 320 320v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80c0-159.1-128.9-288-288-288m-4 112c-95 0-172 77-172 172v84c0 8.8-7.2 16-16 16s-16-7.2-16-16v-84c0-112.7 91.3-204 204-204s204 91.3 204 204v84c0 8.8-7.2 16-16 16s-16-7.2-16-16v-84c0-95-77-172-172-172m-60 176v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80c0-53 43-96 96-96s96 43 96 96v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80c0-35.3-28.7-64-64-64s-64 28.7-64 64"})
  );
}

export default LanRainbow;
