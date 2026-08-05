import React from 'react';

export function LanBlanketSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M120 480C56.4 480 4.4 430.5.3 368H0V120c0-48.6 39.4-88 88-88h272c48.6 0 88 39.4 88 88v192c0 39.8-32.2 72-72 72H120c-13.3 0-24-10.7-24-24s10.7-24 24-24h256c13.3 0 24-10.7 24-24s-10.7-24-24-24H120c-39.8 0-72 32.2-72 72s32.2 72 72 72h304c13.3 0 24 10.7 24 24s-10.7 24-24 24z"})
  );
}

export default LanBlanketSolid;
