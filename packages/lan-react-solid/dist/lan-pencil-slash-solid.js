import React from 'react';

export function LanPencilSlashSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -31.95 576 576.1',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L373.6 307.8l70.4-70.4-104-104-33.9-34-70.4 70.4zm126.8 262.6-76.9 76.9c-10.7 10.7-18.5 24.1-22.6 38.7L32.9 481c-2.3 8.3 0 17.3 6.2 23.4s15.1 8.5 23.4 6.2l127.8-35.5c14.6-4.1 27.9-11.8 38.7-22.6l76.9-76.9L168 237.7zm-52.1 125 17.3-6.9c5.3-2.1 11 1.8 11 7.4v20.2c0 8.8 7.2 16 16 16h20.2c5.7 0 9.5 5.7 7.4 11l-6.9 17.3c-1.1.4-2.2.8-3.3 1.1l-86.9 24.1 24.1-86.9c.3-1.1.7-2.2 1.1-3.3m362.2-159.3 44.9-44.9c13.6-13.6 21.2-31.9 21.2-51.1s-7.6-37.6-21.2-51.1l-35.7-35.7C473.6 7 455.2-.6 436-.6S398.4 7 384.9 20.6L340 65.5l104 104z"})
  );
}

export default LanPencilSlashSolid;
