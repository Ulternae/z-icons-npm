import React from 'react';

export function LanPipeSmokingSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 256v90.4C0 437.9 74.1 512 165.6 512c56.3 0 108.8-28.6 139.3-76l136.3-212H323.3l-67.2 96v-64c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32m356.8-80H472l72-112h64c17.7 0 32-14.3 32-32S625.7 0 608 0h-94.7c-20.9 0-40.5 10.2-52.4 27.3z"})
  );
}

export default LanPipeSmokingSolid;
