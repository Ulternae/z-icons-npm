import React from 'react';

export function MinaTicketSlash({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M12 8v.5m0 7v.5m-9 1v-3a2 2 0 1 0 0-4V7a2 2 0 0 1 2-2h10M5 19h14a2 2 0 0 0 2-2v-3a2 2 0 1 1 0-4V7a2 2 0 0 0-2-2M3 21 21 3"})
  );
}

export default MinaTicketSlash;
