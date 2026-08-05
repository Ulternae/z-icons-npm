import React from 'react';

export function LanMessageDotRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 543.991',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M496 160a80 80 0 1 0 0-160 80 80 0 1 0 0 160m48 192V198.7c-14.8 6-31 9.3-48 9.3v144c0 26.5-21.5 48-48 48H327.6c-9.9 0-19.6 3.1-27.7 8.8L208 473.7V424c0-13.3-10.7-24-24-24h-56c-26.5 0-48-21.5-48-48V128c0-26.5 21.5-48 48-48h240c0-17 3.3-33.2 9.3-48H128c-53 0-96 43-96 96v224c0 53 43 96 96 96h32v72c0 9 5 17.2 13 21.3s17.6 3.5 24.9-1.7L327.6 448H448c53 0 96-43 96-96"})
  );
}

export default LanMessageDotRegular;
