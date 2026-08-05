import React from 'react';

export function LanBrazilianRealSignRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M408 16c13.3 0 24 10.7 24 24v24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24h-53.1c-32.5 0-58.9 26.3-58.9 58.9 0 28.4 20.3 52.8 48.3 57.9l39.9 7.3c50.8 9.2 87.7 53.5 87.7 105.1 0 49.7-34 91.5-80 103.4V472c0 13.3-10.7 24-24 24s-24-10.7-24-24v-24h-48c-13.3 0-24-10.7-24-24s10.7-24 24-24H405c32.5 0 58.9-26.3 58.9-58.9 0-28.4-20.3-52.8-48.3-57.9l-39.9-7.2c-50.8-9.2-87.7-53.5-87.7-105.1 0-55.3 42.1-100.9 96-106.3V40c0-13.3 10.7-24 24-24M0 56c0-13.3 10.7-24 24-24h96c75.1 0 136 60.9 136 136 0 54.4-32 101.4-78.1 123.1l45.2 158.3c3.6 12.7-3.7 26-16.5 29.7s-26-3.7-29.7-16.5l-45.4-159.1c-3.8.3-7.6.5-11.5.5H48v152c0 13.3-10.7 24-24 24S0 469.3 0 456zm48 200h72c48.6 0 88-39.4 88-88s-39.4-88-88-88H48z"})
  );
}

export default LanBrazilianRealSignRegular;
