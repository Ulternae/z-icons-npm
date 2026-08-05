import React from 'react';

export function LanBoxAltSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M.2 144c-.1 1.5-.2 3-.2 4.5V416c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V148.5c0-1.5-.1-3-.2-4.5H288v48c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-48zm22.7-48h146.3l22.9-80H113c-20.7 0-40.1 10-52.1 26.8zm256 0h146.3l-38-53.2C375.1 26 355.7 16 335.1 16H256z"})
  );
}

export default LanBoxAltSolid;
