import React from 'react';

export function LanObjectsAlignCenterVertical({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M208 64c8.8 0 16 7.2 16 16v352c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16zm-64-32c-26.5 0-48 21.5-48 48v160H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v160c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V272h64v96c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48v-96h80c8.8 0 16-7.2 16-16s-7.2-16-16-16h-80v-96c0-26.5-21.5-48-48-48h-64c-26.5 0-48 21.5-48 48v96h-64V80c0-26.5-21.5-48-48-48zm288 96c8.8 0 16 7.2 16 16v224c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16z"})
  );
}

export default LanObjectsAlignCenterVertical;
