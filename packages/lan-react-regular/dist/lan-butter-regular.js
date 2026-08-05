import React from 'react';

export function LanButterRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M464 112h48c8.8 0 16 7.2 16 16v144h48V128c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v144h48V128c0-8.8 7.2-16 16-16h288v160h48zM56 320c-13.3 0-24 10.7-24 24s10.7 24 24 24h8v48c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32v-48h16c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
  );
}

export default LanButterRegular;
