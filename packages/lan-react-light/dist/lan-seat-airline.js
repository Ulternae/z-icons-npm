import React from 'react';

export function LanSeatAirline({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M16 0c8.8 0 16 7.2 16 16v138c0 7.4 1.3 14.7 3.8 21.7L64.7 256H296c8.8 0 16 7.2 16 16s-7.2 16-16 16H76.2l11.6 32.3c6.9 19 24.9 31.7 45.2 31.7h235c8.8 0 16 7.2 16 16s-7.2 16-16 16H133c-33.7 0-63.8-21.2-75.3-52.9l-52-144.5C1.9 176.1 0 165.1 0 154V16C0 7.2 7.2 0 16 0m16 496c0-8.8 7.2-16 16-16h320c8.8 0 16 7.2 16 16s-7.2 16-16 16H48c-8.8 0-16-7.2-16-16"})
  );
}

export default LanSeatAirline;
