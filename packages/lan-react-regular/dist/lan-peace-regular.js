import React from 'react';

export function LanPeaceRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M232 462.6v-156l-120.7 98.8c32 31 74 51.9 120.7 57.2M80.9 368.3 232 244.6V49.4C128.4 61.3 48 149.2 48 256c0 41.4 12.1 79.9 32.9 112.3m319.8 37.1L280 306.6v156c46.7-5.4 88.7-26.2 120.7-57.2m30.4-37.1C451.9 335.9 464 297.4 464 256c0-106.8-80.4-194.7-184-206.6v195.3zM0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0"})
  );
}

export default LanPeaceRegular;
