import React from 'react';

export const LanRoadBarrierThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M8 32c4.4 0 8 3.6 8 8v40h608V40c0-4.4 3.6-8 8-8s8 3.6 8 8v432c0 4.4-3.6 8-8 8s-8-3.6-8-8V304H16v168c0 4.4-3.6 8-8 8s-8-3.6-8-8V40c0-4.4 3.6-8 8-8m616 256V96h-7.1l-1.8 3.6L520.9 288zm-608 0h7.1l1.8-3.6L119.1 96H16zM599.1 96H457l-1.8 3.6L361 288h142.1l1.8-3.6zm-462.2 0-96 192H183l1.8-3.6L279 96zm158.2 3.6L200.9 288H343l1.8-3.6L439 96H296.9z"})
);

export default LanRoadBarrierThin;
