import React from 'react';

export function LanArrowRightFromBracketRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M168 80c13.3 0 24-10.7 24-24s-10.7-24-24-24H96C43 32 0 75 0 128v256c0 53 43 96 96 96h72c13.3 0 24-10.7 24-24s-10.7-24-24-24H96c-26.5 0-48-21.5-48-48V128c0-26.5 21.5-48 48-48zm337 193c9.4-9.4 9.4-24.6 0-33.9L369 103c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l95 95H184c-13.3 0-24 10.7-24 24s10.7 24 24 24h246.1l-95 95c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0z"})
  );
}

export default LanArrowRightFromBracketRegular;
