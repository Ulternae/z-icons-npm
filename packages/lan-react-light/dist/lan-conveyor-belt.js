import React from 'react';

export function LanConveyorBelt({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M208 32h224c8.8 0 16 7.2 16 16v160c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16m-48 16v160c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H208c-26.5 0-48 21.5-48 48m384 304c35.3 0 64 28.7 64 64s-28.7 64-64 64H96c-35.3 0-64-28.7-64-64s28.7-64 64-64zM96 320c-53 0-96 43-96 96s43 96 96 96h448c53 0 96-43 96-96s-43-96-96-96zm56 96a24 24 0 1 0-48 0 24 24 0 1 0 48 0m168 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48m216-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0"})
  );
}

export default LanConveyorBelt;
