import React from 'react';

export const LanWaveformPathThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M208 0c4.4 0 8 3.6 8 8v464c0 4.4-3.6 8-8 8s-8-3.6-8-8V8c0-4.4 3.6-8 8-8m192 64c4.4 0 8 3.6 8 8v336c0 4.4-3.6 8-8 8s-8-3.6-8-8V72c0-4.4 3.6-8 8-8M112 96c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8s-8-3.6-8-8V104c0-4.4 3.6-8 8-8m192 32c4.4 0 8 3.6 8 8v208c0 4.4-3.6 8-8 8s-8-3.6-8-8V136c0-4.4 3.6-8 8-8M16 192c4.4 0 8 3.6 8 8v80c0 4.4-3.6 8-8 8s-8-3.6-8-8v-80c0-4.4 3.6-8 8-8m480 0c4.4 0 8 3.6 8 8v80c0 4.4-3.6 8-8 8s-8-3.6-8-8v-80c0-4.4 3.6-8 8-8"})
);

export default LanWaveformPathThin;
