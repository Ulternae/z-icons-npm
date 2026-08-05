import React from 'react';

export function LanArrowLeftFromLine({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M480 80c0-8.8 7.2-16 16-16s16 7.2 16 16v352c0 8.8-7.2 16-16 16s-16-7.2-16-16zM4.7 267.3c-6.2-6.2-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L54.6 240H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H54.6l116.7 116.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0z"})
  );
}

export default LanArrowLeftFromLine;
