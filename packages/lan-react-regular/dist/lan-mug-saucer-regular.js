import React from 'react';

export function LanMugSaucerRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M112 80h288v208c0 26.5-21.5 48-48 48H160c-26.5 0-48-21.5-48-48zm336 144V80h8c39.8 0 72 32.2 72 72s-32.2 72-72 72zm0 64v-16h8c66.3 0 120-53.7 120-120S522.3 32 456 32H96c-17.7 0-32 14.3-32 32v224c0 53 43 96 96 96h192c53 0 96-43 96-96M56 464c-13.3 0-24 10.7-24 24s10.7 24 24 24h400c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
  );
}

export default LanMugSaucerRegular;
