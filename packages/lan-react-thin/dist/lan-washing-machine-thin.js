import React from 'react';

export function LanWashingMachineThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M384 16c26.5 0 48 21.5 48 48v384c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm48 96a16 16 0 1 0-32 0 16 16 0 1 0 32 0m48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32m191.6 202.3c-14.3 3.4-30.4 5.7-47.6 5.7-64 0-96-64-160-64-13.4 0-27.4 2.2-40.7 5.4 17.6-49.7 65-85.4 120.7-85.4 70.7 0 128 57.3 128 128 0 3.5-.1 6.9-.4 10.3m-2.5 17c-12.5 57.6-63.8 100.8-125.1 100.8-70.7 0-128-57.3-128-128q0-12.75 2.4-24.9c15-4.2 30.9-7.1 45.6-7.1 26.5 0 46.6 13 71.1 29.3l1.2.8c23.2 15.5 50.8 33.9 87.6 33.9 16.2 0 31.3-1.9 45.1-4.8zM224 448a144 144 0 1 0 0-288 144 144 0 1 0 0 288"})
  );
}

export default LanWashingMachineThin;
