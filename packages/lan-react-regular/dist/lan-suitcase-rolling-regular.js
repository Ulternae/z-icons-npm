import React from 'react';

export function LanSuitcaseRollingRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 384 576',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M144 24v72h96V24c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8M96 96V24c0-30.9 25.1-56 56-56h80c30.9 0 56 25.1 56 56v72h32c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64v8c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8H112v8c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64zm-32 48c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h256c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm32 104c0-13.3 10.7-24 24-24h144c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24m0 112c0-13.3 10.7-24 24-24h144c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24"})
  );
}

export default LanSuitcaseRollingRegular;
