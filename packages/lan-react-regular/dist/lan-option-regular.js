import React from 'react';

export function LanOptionRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M172.1 120.4c-4.6-5.3-11.2-8.4-18.2-8.4H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h129.9c21 0 41 9.2 54.7 25.1l259.3 302.5c4.6 5.3 11.2 8.4 18.2 8.4H616c13.3 0 24 10.7 24 24s-10.7 24-24 24H486.1c-21 0-41-9.2-54.7-25.1zM616 64c13.3 0 24 10.7 24 24s-10.7 24-24 24H440c-13.3 0-24-10.7-24-24s10.7-24 24-24z"})
  );
}

export default LanOptionRegular;
