import React from 'react';

export function LanQuoteRightAltRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M448 296c0 66.3-53.7 120-120 120h-16c-13.3 0-24-10.7-24-24s10.7-24 24-24h16c39.8 0 72-32.2 72-72v-10c-5.1 1.3-10.5 2-16 2h-64c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64zm-48-72v-64c0-8.8-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16M64 240h64c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16m128-48v104c0 66.3-53.7 120-120 120H56c-13.3 0-24-10.7-24-24s10.7-24 24-24h16c39.8 0 72-32.2 72-72v-10c-5.1 1.3-10.5 2-16 2H64c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64z"})
  );
}

export default LanQuoteRightAltRegular;
