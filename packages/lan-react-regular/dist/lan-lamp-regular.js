import React from 'react';

export function LanLampRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M56 240h336L325.3 80H122.6L55.9 240zm88 48H32c-10.7 0-20.7-5.3-26.6-14.2s-7-20.2-2.9-30.1l80-192C87.4 39.8 99.1 32 112 32h224c12.9 0 24.6 7.8 29.5 19.7l80 192c4.1 9.9 3 21.2-2.9 30.1S426.7 288 416 288H304v28.1c29.3 23.5 48 59.5 48 99.9 0 38.2-16.8 72.5-43.3 96H139.4c-26.6-23.5-43.3-57.8-43.3-96 0-40.4 18.7-76.5 48-99.9V288zm112 0h-64v51.1l-18 14.4c-18.4 14.7-30 37.2-30 62.5 0 18 5.9 34.6 16 48h128c10.1-13.4 16-30 16-48 0-25.2-11.6-47.7-30-62.5l-18-14.4z"})
  );
}

export default LanLampRegular;
