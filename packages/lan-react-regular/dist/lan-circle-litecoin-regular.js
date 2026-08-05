import React from 'react';

export function LanCircleLitecoinRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-40-384c-13.3 0-24 10.7-24 24v76.5l-37.1 12.4c-8.4 2.8-12.9 11.9-10.1 20.2s11.9 12.9 20.2 10.1l26.9-9V360c0 13.3 10.7 24 24 24h112c13.3 0 24-10.7 24-24s-10.7-24-24-24h-88v-89.8l69.1-23c8.4-2.8 12.9-11.9 10.1-20.2s-11.9-12.9-20.2-10.1L240 212.5V152c0-13.3-10.7-24-24-24"})
  );
}

export default LanCircleLitecoinRegular;
