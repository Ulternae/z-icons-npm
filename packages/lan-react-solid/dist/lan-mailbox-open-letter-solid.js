import React from 'react';

export function LanMailboxOpenLetterSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m149.4 410.6 6.3 3c6.4 2.6 13.3 3.9 20.3 3.9 9.3 0 18.5-2.4 26.6-6.8l85.4-47v116.4H48c-26.5 0-48-21.5-48-48V328.5l149.4 82.2zM528 48c26.5 0 48 21.5 48 48 38.9 29.2 64 75.7 64 128v192c0 35.3-28.7 64-64 64H336V208c0-53-43-96-96-96-41.8 0-77.2 26.7-90.4 64H99.7C114.2 111.9 171.5 64 240 64h140.3c8.8-9.8 21.5-16 35.7-16zM288 308.8l-108.6 59.8c-1.1.6-2.2.9-3.4.9-.6 0-1.2-.1-1.8-.2l-1.7-.7-172.6-95V272c0-26.5 21.5-48 48-48h240v84.8zM440 96c-12.4 0-22.6 9.4-23.9 21.5l-.1 2.5v112c0 13.3 10.7 24 24 24s24-10.7 24-24v-56h40c13.3 0 24-10.7 24-24v-32c0-12.4-9.4-22.6-21.5-23.9L504 96z"})
  );
}

export default LanMailboxOpenLetterSolid;
