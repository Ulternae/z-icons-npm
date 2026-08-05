import React from 'react';

export function LanNotesStickySolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M96 352c0 35.3 28.7 64 64 64h181.5c17 0 33.3-6.7 45.3-18.7l106.5-106.6c12-12 18.7-28.3 18.7-45.3V64c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64zm240 5.5V264c0-13.3 10.7-24 24-24h93.5zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120v328c0 35.3 28.7 64 64 64h264c13.3 0 24-10.7 24-24s-10.7-24-24-24H64c-8.8 0-16-7.2-16-16z"})
  );
}

export default LanNotesStickySolid;
