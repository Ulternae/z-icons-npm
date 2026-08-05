import React from 'react';

export function LanPersonSeatThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M224 32a40 40 0 1 0 0 80 40 40 0 1 0 0-80m56 40a56 56 0 1 1-112 0 56 56 0 1 1 112 0M160 216c0-30.9 25.1-56 56-56s56 25.1 56 56v104h32c44.2 0 80 35.8 80 80v48h16c17.7 0 32 14.3 32 32s-14.3 32-32 32h-48c-17.7 0-32-14.3-32-32v-80c0-8.8-7.2-16-16-16h-80c-35.3 0-64-28.7-64-64zm56-40c-22.1 0-40 17.9-40 40v104c0 26.5 21.5 48 48 48h80c17.7 0 32 14.3 32 32v80c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-24c-4.4 0-8-3.6-8-8v-56c0-35.3-28.7-64-64-64h-40c-4.4 0-8-3.6-8-8V216c0-22.1-17.9-40-40-40m-104-8v176c0 48.6 39.4 88 88 88h80c4.4 0 8 3.6 8 8s-3.6 8-8 8h-80c-57.4 0-104-46.6-104-104V168c0-4.4 3.6-8 8-8s8 3.6 8 8"})
  );
}

export default LanPersonSeatThin;
