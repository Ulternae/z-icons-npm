import React from 'react';

export function Lan9Regular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M208 320c36.9 0 70.5-13.9 96-36.7V336c0 53-43 96-96 96H104c-13.3 0-24 10.7-24 24s10.7 24 24 24h104c79.5 0 144-64.5 144-144V175.9C352 96.4 287.5 32 208 32h-48C80.5 32 16 96.5 16 176s64.5 144 144 144zm96-144c0 53-43 96-96 96h-48c-53 0-96-43-96-96s43-96 96-96h48c53 0 96 43 96 96"})
  );
}

export default Lan9Regular;
