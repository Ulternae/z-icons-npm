import React from 'react';

export function LanMortarBoardRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M318.8 38.1c-9.8-4-20.2-6.1-30.8-6.1s-21 2.1-30.8 6.1L14.8 137.9C5.8 141.6 0 150.3 0 160v296c0 13.3 10.7 24 24 24s24-10.7 24-24V195.8l48 19.8v168.5c0 53 86 96 192 96s192-43 192-96V215.6l81.2-33.4c9-3.7 14.8-12.4 14.8-22.1s-5.8-18.4-14.8-22.1zM144 384V235.3l113.2 46.6c9.8 4 20.2 6.1 30.8 6.1s21-2.1 30.8-6.1L432 235.3v149c0 .2-.1.4-.3.9-.4.9-1.3 2.7-3.4 5.2-4.4 5.2-12.6 11.9-26 18.6-26.8 13.4-67.1 23-114.3 23s-87.5-9.7-114.3-23c-13.4-6.7-21.6-13.4-26-18.6-2.1-2.5-3-4.3-3.4-5.2q-.3-.75-.3-.9zM87.2 160l188.3-77.5c4-1.6 8.2-2.5 12.5-2.5s8.5.8 12.5 2.5L488.8 160l-188.3 77.5c-4 1.6-8.2 2.5-12.5 2.5s-8.5-.8-12.5-2.5z"})
  );
}

export default LanMortarBoardRegular;
