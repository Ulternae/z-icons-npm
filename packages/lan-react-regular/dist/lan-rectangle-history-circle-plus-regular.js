import React from 'react';

export function LanRectangleHistoryCirclePlusRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M242.7 432H64c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h241c33.8-29.9 78.3-48 127-48H64c-35.3 0-64 28.7-64 64v144c0 35.3 28.7 64 64 64h193.4c-6.9-15.1-11.9-31.2-14.8-48zM464 128c0-13.3-10.7-24-24-24H72c-13.3 0-24 10.7-24 24s10.7 24 24 24h368c13.3 0 24-10.7 24-24M416 24c0-13.3-10.7-24-24-24H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24m16 520a144 144 0 1 0 0-288 144 144 0 1 0 0 288m16-208v48h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16h48v-48c0-8.8 7.2-16 16-16s16 7.2 16 16"})
  );
}

export default LanRectangleHistoryCirclePlusRegular;
