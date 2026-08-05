import React from 'react';

export function LanSquareThisWayUpThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm104 272h240c4.4 0 8 3.6 8 8s-3.6 8-8 8H104c-4.4 0-8-3.6-8-8s3.6-8 8-8M74.3 205.7c-3.1-3.1-3.1-8.2 0-11.3l64-64c3.1-3.1 8.2-3.1 11.3 0l64 64c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L152 155.3V288c0 4.4-3.6 8-8 8s-8-3.6-8-8V155.3l-50.3 50.3c-3.1 3.1-8.2 3.1-11.3 0zm160-11.3 64-64c3.1-3.1 8.2-3.1 11.3 0l64 64c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L312 155.3V288c0 4.4-3.6 8-8 8s-8-3.6-8-8V155.3l-50.3 50.3c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3z"})
  );
}

export default LanSquareThisWayUpThin;
