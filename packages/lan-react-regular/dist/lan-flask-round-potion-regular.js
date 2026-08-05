import React from 'react';

export function LanFlaskRoundPotionRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M88 48h8v105.7C38.6 186.9 0 248.9 0 320c0 106 86 192 192 192s192-86 192-192c0-71.1-38.6-133.1-96-166.3V48h8c13.3 0 24-10.7 24-24S309.3 0 296 0H88C74.7 0 64 10.7 64 24s10.7 24 24 24m56 120.2V48h96v120.2c0 9.3 5.3 17.7 13.7 21.7C302.4 213 336 262.6 336 320.1h-35.7c-24.6 0-48.8-6.7-70-19.4l-5-3c-28-16.8-60-25.6-92.6-25.6-27.9 0-55.5 6.5-80.5 19l-1.6.8c9-45.1 39-82.7 79.5-101.9 8.4-4 13.7-12.4 13.7-21.7zM50.3 345.7l23.5-11.8c18.3-9.2 38.5-13.9 59-13.9 23.9 0 47.4 6.5 67.9 18.8l5 3c28.5 17.1 61.3 26.2 94.6 26.2h27.5c-19.8 55.9-73.1 96-135.8 96-70.8 0-129.6-51-141.7-118.3"})
  );
}

export default LanFlaskRoundPotionRegular;
