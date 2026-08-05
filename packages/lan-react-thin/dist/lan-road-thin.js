import React from 'react';

export function LanRoadThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M17.4 412.9c-.9 3.4-1.4 7-1.4 10.6 0 22.4 18.1 40.5 40.5 40.5H248v-72c0-4.4 3.6-8 8-8s8 3.6 8 8v72h191.5c22.4 0 40.5-18.1 40.5-40.5 0-3.6-.5-7.1-1.4-10.6L405.4 83.5C399.7 62.5 380.7 48 359 48h-95v72c0 4.4-3.6 8-8 8s-8-3.6-8-8V48h-95c-21.7 0-40.7 14.5-46.3 35.5zM256 32h103c28.9 0 54.2 19.4 61.8 47.3L510 408.7c1.3 4.8 2 9.8 2 14.8 0 31.2-25.3 56.5-56.5 56.5h-399C25.3 480 0 454.7 0 423.5c0-5 .7-10 2-14.8L91.2 79.3C98.8 51.4 124.1 32 153 32zm8 176v96c0 4.4-3.6 8-8 8s-8-3.6-8-8v-96c0-4.4 3.6-8 8-8s8 3.6 8 8"})
  );
}

export default LanRoadThin;
