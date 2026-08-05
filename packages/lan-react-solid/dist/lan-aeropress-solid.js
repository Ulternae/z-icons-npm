import React from 'react';

export function LanAeropressSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -16 384 528',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M272 128c26.5 0 48 21.5 48 48v224h40c13.3 0 24 10.7 24 24s-10.7 24-24 24h-40v16c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48v-16H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h40V176c0-26.5 21.5-48 48-48zm-24 224a24 24 0 1 0 0 48 24 24 0 1 0 0-48m0-80a24 24 0 1 0 0 48 24 24 0 1 0 0-48m0-80a24 24 0 1 0 0 48 24 24 0 1 0 0-48m64-208c13.3 0 24 10.7 24 24s-10.7 24-24 24h-24v48H96V32H72C58.7 32 48 21.3 48 8s10.7-24 24-24z"})
  );
}

export default LanAeropressSolid;
