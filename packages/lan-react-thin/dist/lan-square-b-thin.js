import React from 'react';

export function LanSquareBThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm160 72c0-4.4 3.6-8 8-8h68c28.7 0 52 23.3 52 52 0 15.7-6.9 29.7-17.9 39.2 19.8 7.4 33.9 26.4 33.9 48.8 0 28.7-23.3 52-52 52h-84c-4.4 0-8-3.6-8-8zm112 44c0-19.9-16.1-36-36-36h-60v72h60c19.9 0 36-16.1 36-36m-96 124h76c19.9 0 36-16.1 36-36s-16.1-36-36-36h-76z"})
  );
}

export default LanSquareBThin;
