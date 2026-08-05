import React from 'react';

export function LanMessageBot({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M128 128c0-35.3 28.7-64 64-64h256c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64h-88c-8.7 0-17.1 2.8-24 8l-112 84v-68c0-13.3-10.7-24-24-24h-8c-35.3 0-64-28.7-64-64zm64-96c-53 0-96 43-96 96v64H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v128c0 53 43 96 96 96v68c0 15.5 12.5 28 28 28 6.1 0 12-2 16.8-5.6l118.4-88.8c1.4-1 3.1-1.6 4.8-1.6h88c53 0 96-43 96-96V224h80c8.8 0 16-7.2 16-16s-7.2-16-16-16h-80v-64c0-53-43-96-96-96zm64 216a24 24 0 1 0 0-48 24 24 0 1 0 0 48m152-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-152-64h128c35.3 0 64 28.7 64 64s-28.7 64-64 64H256c-35.3 0-64-28.7-64-64s28.7-64 64-64m-96 64c0 53 43 96 96 96h128c53 0 96-43 96-96s-43-96-96-96H256c-53 0-96 43-96 96"})
  );
}

export default LanMessageBot;
