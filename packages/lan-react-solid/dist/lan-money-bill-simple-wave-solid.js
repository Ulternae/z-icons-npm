import React from 'react';

export function LanMoneyBillSimpleWaveSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 109.5v310.1c0 19.4 11.8 37.3 30.3 43.3 94 30 158.8 8.4 223.3-13.1C316 429 378 408.3 465.7 434.5c22.2 6.6 46.2-8.8 46.2-32V92.4c0-19.4-11.8-37.3-30.3-43.3-94-30-158.8-8.4-223.3 13.1C195.9 83 133.9 103.7 46.2 77.5 24 70.9-.1 86.3-.1 109.5zM256 352c-44.2 0-80-43-80-96s35.8-96 80-96 80 43 80 96-35.8 96-80 96"})
  );
}

export default LanMoneyBillSimpleWaveSolid;
