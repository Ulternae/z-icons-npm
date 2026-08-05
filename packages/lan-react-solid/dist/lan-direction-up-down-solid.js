import React from 'react';

export function LanDirectionUpDownSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 256 576',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M110.4 536.3c4.5 4.9 10.9 7.7 17.6 7.7s13-2.8 17.6-7.7l104-112c6.5-7 8.2-17.2 4.4-25.9S241.5 384 232 384h-56V128h56c9.5 0 18.2-5.7 22-14.4s2.1-18.9-4.4-25.9l-104-112C141-29.2 134.7-32 128-32s-13 2.8-17.6 7.7l-104 112c-6.5 7-8.2 17.2-4.4 25.9S14.5 128 24 128h56v256H24c-9.5 0-18.2 5.7-22 14.4s-2.1 18.9 4.4 25.9z"})
  );
}

export default LanDirectionUpDownSolid;
