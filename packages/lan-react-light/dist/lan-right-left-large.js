import React from 'react';

export function LanRightLeftLarge({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M371.8 2.4c12-5 25.7-2.2 34.9 6.9l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-9.2 9.2-22.9 11.9-34.9 6.9S352 364.9 352 352v-80H208c-4.2 0-8.3-1.7-11.3-4.7s-4.7-7.1-4.7-11.3v-96L32 320l160 160v-96c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v80c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-160-160c-12.5-12.5-12.5-32.8 0-45.3l160-160c9.2-9.2 22.9-11.9 34.9-6.9S224 147.1 224 160v80h144c4.2 0 8.3 1.7 11.3 4.7s4.7 7.1 4.7 11.3v96l160-160L384 32v96c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16h48V32c0-12.9 7.8-24.6 19.8-29.6"})
  );
}

export default LanRightLeftLarge;
