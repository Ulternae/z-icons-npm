import React from 'react';

export function LanBackwardFast({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M16 480c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16s16 7.2 16 16v165.9L235.2 39.7c9.5-8.1 22.8-10 34.2-4.8S288 51.5 288 64v122.4L459.2 39.7c9.5-8.1 22.8-10 34.2-4.8S512 51.5 512 64v384c0 12.5-7.3 23.8-18.6 29.1s-24.7 3.4-34.2-4.8L288 325.6V448c0 12.5-7.3 23.8-18.6 29.1s-24.7 3.4-34.2-4.8L32 298.1V464c0 8.8-7.2 16-16 16m272-196.6L480 448V64L288 228.6v54.9zM256 448V64L32 256z"})
  );
}

export default LanBackwardFast;
