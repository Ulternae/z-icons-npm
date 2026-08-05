import React from 'react';

export function LanSquare3Thin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm244 152c19.9 0 36-16.1 36-36s-16.1-36-36-36h-76c-4.4 0-8-3.6-8-8s3.6-8 8-8h76c28.7 0 52 23.3 52 52 0 18.5-9.7 34.8-24.3 44 14.6 9.2 24.3 25.5 24.3 44 0 28.7-23.3 52-52 52h-76c-4.4 0-8-3.6-8-8s3.6-8 8-8h76c19.9 0 36-16.1 36-36s-16.1-36-36-36h-60c-4.4 0-8-3.6-8-8s3.6-8 8-8z"})
  );
}

export default LanSquare3Thin;
