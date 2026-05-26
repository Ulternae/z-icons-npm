import React from 'react';

export const LanMicrophoneSignalMeter = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M320 32c35.3 0 64 28.7 64 64v128c0 35.3-28.7 64-64 64s-64-28.7-64-64V96c0-35.3 28.7-64 64-64m-96 64v128c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96s-96 43-96 96m-64 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v48c0 100.6 77.4 183.2 176 191.3V480h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64v-64.7c98.6-8.1 176-90.7 176-191.3v-48c0-8.8-7.2-16-16-16s-16 7.2-16 16v48c0 88.4-71.6 160-160 160s-160-71.6-160-160zM48 64a24 24 0 1 0-48 0 24 24 0 1 0 48 0M24 216a24 24 0 1 0 0-48 24 24 0 1 0 0 48m24 104a24 24 0 1 0-48 0 24 24 0 1 0 48 0M24 472a24 24 0 1 0 0-48 24 24 0 1 0 0 48"})
);

export default LanMicrophoneSignalMeter;
