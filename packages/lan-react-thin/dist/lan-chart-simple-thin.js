import React from 'react';

export function LanChartSimpleThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M272 48c17.7 0 32 14.3 32 32v352c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32V80c0-17.7 14.3-32 32-32zm-32-16c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM80 240c17.7 0 32 14.3 32 32v160c0 17.7-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V272c0-17.7 14.3-32 32-32zm-32-16c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm384-112h32c17.7 0 32 14.3 32 32v288c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32m-48 32v288c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48h-32c-26.5 0-48 21.5-48 48"})
  );
}

export default LanChartSimpleThin;
