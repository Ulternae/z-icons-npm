import React from 'react';

export const LanBorderInnerSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M252 64c0-15.5-12.5-28-28-28s-28 12.5-28 28v164H32c-15.5 0-28 12.5-28 28s12.5 28 28 28h164v164c0 15.5 12.5 28 28 28s28-12.5 28-28V284h164c15.5 0 28-12.5 28-28s-12.5-28-28-28H252zM32 184a24 24 0 1 0 0-48 24 24 0 1 0 0 48m24 264a24 24 0 1 0-48 0 24 24 0 1 0 48 0m0-384a24 24 0 1 0-48 0 24 24 0 1 0 48 0m384 96a24 24 0 1 0-48 0 24 24 0 1 0 48 0M32 376a24 24 0 1 0 0-48 24 24 0 1 0 0 48m408-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0M128 472a24 24 0 1 0 0-48 24 24 0 1 0 0 48m24-408a24 24 0 1 0-48 0 24 24 0 1 0 48 0m168 408a24 24 0 1 0 0-48 24 24 0 1 0 0 48m24-408a24 24 0 1 0-48 0 24 24 0 1 0 48 0m72 408a24 24 0 1 0 0-48 24 24 0 1 0 0 48m24-408a24 24 0 1 0-48 0 24 24 0 1 0 48 0"})
);

export default LanBorderInnerSolid;
