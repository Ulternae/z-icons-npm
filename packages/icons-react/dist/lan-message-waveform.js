import React from 'react';

export const LanMessageWaveform = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M160 64c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h40c13.3 0 24 10.7 24 24v68l80-60v32c0 2.6.2 5.1.5 7.7l-67.7 50.7C232 542 226.1 544 220 544c-15.5 0-28-12.5-28-28v-68h-32c-53 0-96-43-96-96V128c0-53 43-96 96-96h320c53 0 96 43 96 96v165.7c-8.3-9.4-19.4-16.4-32-19.7V128c0-35.3-28.7-64-64-64zm304 240v224c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16m80 32v160c0 8.8-7.2 16-16 16s-16-7.2-16-16V336c0-8.8 7.2-16 16-16s16 7.2 16 16m-160 16v128c0 8.8-7.2 16-16 16s-16-7.2-16-16V352c0-8.8 7.2-16 16-16s16 7.2 16 16m240 32v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64c0-8.8 7.2-16 16-16s16 7.2 16 16"})
);

export default LanMessageWaveform;
