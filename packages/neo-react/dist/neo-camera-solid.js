import React from 'react';

export function NeoCameraSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 560 560',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M196 28c-26.4 0-51.3 12.4-67.2 33.6l-21.9 29.1c-37.7 7.8-67 24.1-85 56.9C4 180.1 0 224.7 0 280v28c0 35.6 1.7 65.9 7.2 91.2 5.5 25.6 15.2 47.8 32.5 65.1s39.5 27 65.1 32.5c25.3 5.5 55.7 7.2 91.2 7.2h168c35.6 0 65.9-1.7 91.2-7.2 25.6-5.5 47.8-15.2 65.1-32.5s27-39.5 32.5-65.1c5.5-25.3 7.2-55.7 7.2-91.2v-28c0-55.3-4-99.9-21.9-132.4-18-32.8-47.3-49-85-56.8l-21.9-29.2A83.97 83.97 0 0 0 364 28zm12.9 180.9c17.6-17.7 42.4-26.9 71.1-26.9s53.5 9.2 71.2 26.9S378 251.4 378 280s-9.2 53.5-26.8 71.2S308.7 378 280 378s-53.5-9.2-71.1-26.8S182 308.7 182 280s9.2-53.5 26.9-71.1"})
  );
}

export default NeoCameraSolid;
