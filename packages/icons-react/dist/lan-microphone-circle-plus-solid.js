import React from 'react';

export const LanMicrophoneCirclePlusSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M128 96v128c0 53 43 96 96 96 5.6 0 11.2-.5 16.5-1.4-.4-4.8-.5-9.7-.5-14.6 0-64.2 31.5-121.1 80-156V96c0-53-43-96-96-96s-96 43-96 96m122.1 269.6Q237.35 368 224 368c-79.5 0-144-64.5-144-144v-40c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 97.9 73.3 178.7 168 190.5V464h-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48v-49.5c8.1-1 16.1-2.5 23.9-4.5-9.1-13.7-16.4-28.5-21.8-44.3zM432 448a144 144 0 1 0 0-288 144 144 0 1 0 0 288m16-208v48h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16h48v-48c0-8.8 7.2-16 16-16s16 7.2 16 16"})
);

export default LanMicrophoneCirclePlusSolid;
