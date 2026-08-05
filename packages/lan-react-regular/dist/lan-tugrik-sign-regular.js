import React from 'react';

export function LanTugrikSignRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M24 32C10.7 32 0 42.7 0 56s10.7 24 24 24h144v125.3L58.2 232.8C45.3 236 37.5 249 40.7 261.9s16.3 20.6 29.1 17.4l98.2-24.5v46.5L58.2 328.8C45.3 332 37.5 345 40.7 357.9s16.3 20.6 29.1 17.4l98.2-24.6V456c0 13.3 10.7 24 24 24s24-10.7 24-24V338.7l109.8-27.5c12.9-3.2 20.7-16.2 17.5-29.1s-16.2-20.7-29.1-17.5L216 289.1v-46.5l109.8-27.5c12.9-3.2 20.7-16.2 17.5-29.1s-16.2-20.7-29.1-17.5L216 193.3V80h144c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
  );
}

export default LanTugrikSignRegular;
