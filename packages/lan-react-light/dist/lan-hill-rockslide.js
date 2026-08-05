import React from 'react';

export function LanHillRockslide({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M238.5 127.7c-5.5-9.7-5.5-21.6 0-31.4l27-48c5.6-10.1 16.3-16.3 27.9-16.3h53.3c11.6 0 22.2 6.2 27.9 16.3l27 48c5.5 9.7 5.5 21.6 0 31.4l-27 48c-5.7 10.1-16.3 16.3-27.9 16.3h-53.3c-11.6 0-22.2-6.2-27.9-16.3zM293.4 64l-27 48 27 48h53.3l27-48-27-48zM32 118.6V448c0 17.7 14.3 32 32 32h329.4zm-32 0C0 90.1 34.5 75.8 54.6 96L416 457.4c20.2 20.2 5.9 54.6-22.6 54.6H64c-35.3 0-64-28.7-64-64zm432.3 287.9c-10.1-5.7-16.3-16.3-16.3-27.9v-53.3c0-11.6 6.2-22.2 16.3-27.9l48-27c9.7-5.5 21.6-5.5 31.4 0l48 27c10.1 5.7 16.3 16.3 16.3 27.9v53.3c0 11.6-6.2 22.2-16.3 27.9l-48 27c-9.7 5.5-21.6 5.5-31.4 0zm63.7-.9 48-27v-53.3l-48-27-48 27v53.3zM128 64a32 32 0 1 1 64 0 32 32 0 1 1-64 0m224 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64"})
  );
}

export default LanHillRockslide;
