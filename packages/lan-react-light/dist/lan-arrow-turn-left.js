import React from 'react';

export function LanArrowTurnLeft({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M480 432c0 8.8 7.2 16 16 16s16-7.2 16-16v-96c0-53-43-96-96-96H54.6l116.7-116.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-144 144c-3 3-4.7 7.1-4.7 11.3s1.7 8.3 4.7 11.3l144 144c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L54.6 272H416c35.3 0 64 28.7 64 64z"})
  );
}

export default LanArrowTurnLeft;
