import React from 'react';

export function LanNfcSlashRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -31.95 576 576.1',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-62.1-62.1c3.3-7.7 5.1-16.2 5.1-25.1V96c0-35.3-28.7-64-64-64H128c-8.9 0-17.4 1.8-25.1 5.1l-62-62zM145.8 80H448c8.8 0 16 7.2 16 16v302.2l-48.4-48.4c.3-1.9.4-3.8.4-5.7v-176c0-22.1-17.9-40-40-40h-72c-22.1 0-40 17.9-40 40v30.1zM368 302.2l-40.4-40.4c.3-1.9.4-3.8.4-5.7 0-13.1-6.3-24.7-16-32v-48h56v126.2zM112 182l-48-48v282c0 35.3 28.7 64 64 64h282l-48-48H128c-8.8 0-16-7.2-16-16zm202 202-48-48h-58v-58l-48-48v114c0 22.1 17.9 40 40 40z"})
  );
}

export default LanNfcSlashRegular;
