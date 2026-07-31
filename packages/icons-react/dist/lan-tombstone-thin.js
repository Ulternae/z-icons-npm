import React from 'react';

export const LanTombstoneThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M400 496H48V192c0-97.2 78.8-176 176-176s176 78.8 176 176zM32 192v304H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h432c4.4 0 8-3.6 8-8s-3.6-8-8-8h-24V192C416 86 330 0 224 0S32 86 32 192m200-48c0-4.4-3.6-8-8-8s-8 3.6-8 8v72h-72c-4.4 0-8 3.6-8 8s3.6 8 8 8h72v136c0 4.4 3.6 8 8 8s8-3.6 8-8V232h72c4.4 0 8-3.6 8-8s-3.6-8-8-8h-72z"})
);

export default LanTombstoneThin;
