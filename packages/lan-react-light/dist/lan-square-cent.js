import React from 'react';

export function LanSquareCent({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm240 16v16.8c28.2 3.2 53.6 15.6 73.1 34.1 6.4 6.1 6.7 16.2.6 22.6s-16.2 6.7-22.6.7C273.9 170 250.7 160 225.2 160c-53 0-96 43-96 96s43 96 96 96c25.5 0 48.7-9.9 65.9-26.2 6.4-6.1 16.6-5.8 22.6.6s5.8 16.6-.6 22.6c-19.6 18.5-45 30.8-73.1 34.1v16.8c0 8.8-7.2 16-16 16s-16-7.2-16-16v-17.2c-62.5-8.4-110.7-62-110.7-126.8S145.5 137.6 208 129.2V112c0-8.8 7.2-16 16-16s16 7.2 16 16"})
  );
}

export default LanSquareCent;
