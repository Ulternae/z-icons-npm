import React from 'react';

export function LanMicrophoneCirclePlusRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M224 48c26.5 0 48 21.5 48 48v101.8c12.9-19.4 29.2-36.2 48-49.8V96c0-53-43-96-96-96s-96 43-96 96v128c0 53 43 96 96 96 5.6 0 11.2-.5 16.5-1.4-.4-4.8-.5-9.7-.5-14.6 0-12.3 1.2-24.4 3.4-36.1-5.9 2.6-12.5 4.1-19.4 4.1-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48m47.9 362c-9.1-13.7-16.4-28.5-21.8-44.3q-12.75 2.4-26.1 2.4c-79.5 0-144-64.5-144-144v-40c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 97.9 73.3 178.7 168 190.5v49.5h-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48v-49.5c8.1-1 16.1-2.5 23.9-4.5zM432 448a144 144 0 1 0 0-288 144 144 0 1 0 0 288m16-208v48h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16h48v-48c0-8.8 7.2-16 16-16s16 7.2 16 16"})
  );
}

export default LanMicrophoneCirclePlusRegular;
