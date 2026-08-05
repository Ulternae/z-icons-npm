import React from 'react';

export function LanChairThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M224 0C135.6 0 64 71.6 64 160v96H48c-26.5 0-48 21.5-48 48v48c0 26.5 21.5 48 48 48v104c0 4.4 3.6 8 8 8s8-3.6 8-8V400h320v104c0 4.4 3.6 8 8 8s8-3.6 8-8V400c26.5 0 48-21.5 48-48v-48c0-26.5-21.5-48-48-48h-16v-96C384 71.6 312.4 0 224 0m144 256h-80V31c47.4 23.6 80 72.5 80 129zM272 24.2V256h-96V24.2c15-5.3 31.2-8.2 48-8.2s33 2.9 48 8.2M160 31v225H80v-96c0-56.5 32.6-105.5 80-129M16 352v-48c0-17.7 14.3-32 32-32h352c17.7 0 32 14.3 32 32v48c0 17.7-14.3 32-32 32H48c-17.7 0-32-14.3-32-32"})
  );
}

export default LanChairThin;
