import React from 'react';

export function LanFastForward({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M496 480c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16s-16 7.2-16 16v165.9L276.8 39.8c-9.5-8.1-22.8-10-34.2-4.8S224 51.5 224 64v122.4L52.8 39.7c-9.5-8.1-22.8-10-34.2-4.8S0 51.5 0 64v384c0 12.5 7.3 23.8 18.6 29.1s24.7 3.4 34.2-4.8L224 325.6V448c0 12.5 7.3 23.8 18.6 29.1s24.7 3.4 34.2-4.8L480 298.1V464c0 8.8 7.2 16 16 16M224 283.4 32 448V64l192 164.6zM256 448V64l224 192z"})
  );
}

export default LanFastForward;
