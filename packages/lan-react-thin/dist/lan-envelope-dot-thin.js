import React from 'react';

export function LanEnvelopeDotThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M560 80a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-144 0a80 80 0 1 1 160 0 80 80 0 1 1-160 0M87.9 64H369c-.7 5.2-1 10.6-1 16H87.9C65.9 80 48 97.9 48 119.9c0 12.6 6 24.5 16.1 32l190.5 141.4c19.8 14.7 46.9 14.7 66.7 0l127.2-94.4c6.1 2.4 12.4 4.4 18.9 5.9L330.9 306.1c-25.5 18.9-60.3 18.9-85.8 0L54.6 164.8c-2.4-1.8-4.6-3.7-6.6-5.8v225c0 26.5 21.5 48 48 48h384c26.5 0 48-21.5 48-48V204c5.5-1.4 10.8-3.2 16-5.3V384c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V119.9C32 89 57 64 87.9 64"})
  );
}

export default LanEnvelopeDotThin;
