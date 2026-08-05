import React from 'react';

export function LanBowlChopsticksSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m18.5 125.1 473.8-74c11.3-1.8 19.7-11.5 19.7-23 0-14.6-13.3-25.6-27.6-22.9L13.1 93.6C5.5 95 0 101.6 0 109.3c0 9.8 8.8 17.3 18.5 15.8M0 159.7c0 9 7.3 16.2 16.2 16.2h472.1c13 0 23.6-10.6 23.6-23.6 0-13.3-11-24-24.4-23.6L15.7 143.5C7 143.8 0 151 0 159.7M33.6 224C15.4 224 .9 239.3 2 257.5c5.4 91.8 59.6 169.7 136.4 209.7l1.2 9.7c2.5 20 19.5 35 39.7 35h153.4c20.2 0 37.2-15 39.7-35l1.2-9.7c76.8-40 131-118 136.4-209.7 1.1-18.2-13.4-33.5-31.6-33.5z"})
  );
}

export default LanBowlChopsticksSolid;
