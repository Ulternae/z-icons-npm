import React from 'react';

export function NeoMoonSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 560 560',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M233.7 92.7c5.7-20.4.3-41.6-11.9-56.3-12.9-15.4-35.1-25-59.2-15.7C59.5 61 0 156 0 280c0 83 26.5 153.6 76.5 203.5S197 560 280 560c86.7 0 159.7-28.9 209.9-83 16.6-17.9 16.2-41.2 6.1-58.1-9.5-15.9-27.4-26.9-48-26.9-71 0-126.4-22.5-164-60s-60-93-60-164c0-27.5 3.4-52.7 9.7-75.3"})
  );
}

export default NeoMoonSolid;
