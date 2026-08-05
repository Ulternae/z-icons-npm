import React from 'react';

export function LanDollyBoxRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 8C18.8 8 8 18.7 8 32s10.8 24 24 24h72.9c3.4 0 6.5 2.2 7.6 5.5l91.3 273.9C177.4 352.5 160 382.2 160 416c0 53 43 96 96 96s96-43 96-96c0-2.2-.1-4.4-.2-6.6l199.8-66.6c12.6-4.2 19.4-17.8 15.2-30.4S549 293 536.4 297.2l-199.8 66.6C319.5 337.4 289.8 320 256 320c-2.2 0-4.4.1-6.6.2L158.1 46.3C150.4 23.4 129 8 104.9 8zm176 408a48 48 0 1 1 96 0 48 48 0 1 1-96 0m72.5-326.7c-25.2 8.2-39 35.3-30.8 60.5l39.6 121.7c8.2 25.2 35.3 39 60.5 30.8l121.7-39.6c25.2-8.2 39-35.3 30.8-60.5L462.8 80.5c-8.2-25.2-35.3-39-60.5-30.8z"})
  );
}

export default LanDollyBoxRegular;
