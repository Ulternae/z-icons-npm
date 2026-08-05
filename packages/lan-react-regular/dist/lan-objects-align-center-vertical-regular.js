import React from 'react';

export function LanObjectsAlignCenterVerticalRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M144 80v352h64V80zm-48 0c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v152h64v-88c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v88h72c13.3 0 24 10.7 24 24s-10.7 24-24 24h-72v88c0 26.5-21.5 48-48 48h-64c-26.5 0-48-21.5-48-48v-88h-64v152c0 26.5-21.5 48-48 48h-64c-26.5 0-48-21.5-48-48V280H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h72zm272 64v224h64V144z"})
  );
}

export default LanObjectsAlignCenterVerticalRegular;
