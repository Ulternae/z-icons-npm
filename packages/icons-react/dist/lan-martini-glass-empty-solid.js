import React from 'react';

export const LanMartiniGlassEmptySolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M32 32C19.1 32 7.4 39.8 2.4 51.8s-2.2 25.7 7 34.8L224 301.2v146.7h-64c-17.7 0-32 14.3-32 32s14.3 32 32 32h192c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64V301.2L502.6 86.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 32 480 32zm224 210.7L109.3 96h293.4z"})
);

export default LanMartiniGlassEmptySolid;
