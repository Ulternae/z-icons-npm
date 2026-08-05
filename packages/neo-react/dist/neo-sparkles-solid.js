import React from 'react';

export function NeoSparklesSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 560 560',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M250.1 32.4C256.1 13.1 273.8 0 294 0s37.9 13.1 43.9 32.4L369.4 135c8.2 26.6 29 47.4 55.6 55.6l102.6 31.6c19.3 5.9 32.4 23.7 32.4 43.9S546.9 304 527.6 310L425 341.4c-26.6 8.2-47.4 29-55.6 55.6l-31.5 102.6c-6 19.3-23.8 32.4-43.9 32.4s-37.9-13.1-43.9-32.4L218.6 397c-8.2-26.6-29-47.4-55.6-55.6L60.4 309.9C41.1 303.9 28 286.2 28 266s13.1-37.9 32.4-43.9L163 190.6c26.6-8.2 47.4-29 55.6-55.6zM84 392c-23.1 0-44.7 7.5-60.6 23.4S0 452.9 0 476s7.5 44.7 23.4 60.6S60.9 560 84 560s44.7-7.5 60.6-23.4S168 499.1 168 476s-7.5-44.7-23.4-60.6S107.1 392 84 392M462 84a42 42 0 1 0 0-84 42 42 0 1 0 0 84M56 112a28 28 0 1 1 56 0 28 28 0 1 1-56 0m420 336a28 28 0 1 0 0-56 28 28 0 1 0 0 56"})
  );
}

export default NeoSparklesSolid;
