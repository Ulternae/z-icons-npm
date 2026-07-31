import React from 'react';

export const LanMicrophoneAlt = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M254 80c-7.1-27.6-32.2-48-62-48-35.3 0-64 28.7-64 64v128c0 35.3 28.7 64 64 64 29.8 0 54.9-20.4 62-48h-46c-8.8 0-16-7.2-16-16s7.2-16 16-16h48v-32h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16h48v-32h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16zm34 16v128c0 53-43 96-96 96s-96-43-96-96V96c0-53 43-96 96-96s96 43 96 96M16 160c8.8 0 16 7.2 16 16v48c0 88.4 71.6 160 160 160s160-71.6 160-160v-48c0-8.8 7.2-16 16-16s16 7.2 16 16v48c0 100.6-77.4 183.2-176 191.3V480h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16h64v-64.7C77.4 407.2 0 324.6 0 224v-48c0-8.8 7.2-16 16-16"})
);

export default LanMicrophoneAlt;
