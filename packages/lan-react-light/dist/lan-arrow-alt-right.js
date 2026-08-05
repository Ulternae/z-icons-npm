import React from 'react';

export function LanArrowAltRight({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M438.6 233.4c6.3 6.3 9.4 14.5 9.4 22.6s-3.1 16.4-9.4 22.6l-160 160c-9.2 9.2-22.9 11.9-34.9 6.9S224 428.9 224 416v-96H48c-26.5 0-48-21.5-48-48v-32c0-26.5 21.5-48 48-48h176V96c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l160 160zM256 416l160-160L256 96v112c0 8.8-7.2 16-16 16H48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h192c8.8 0 16 7.2 16 16z"})
  );
}

export default LanArrowAltRight;
