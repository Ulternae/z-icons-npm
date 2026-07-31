import React from 'react';

export const LanBorderNone = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M32 424a24 24 0 1 0 0 48 24 24 0 1 0 0-48m96-384a24 24 0 1 0 0 48 24 24 0 1 0 0-48m0 384a24 24 0 1 0 0 48 24 24 0 1 0 0-48m192 48a24 24 0 1 0 0-48 24 24 0 1 0 0 48m0-432a24 24 0 1 0 0 48 24 24 0 1 0 0-48m-96 432a24 24 0 1 0 0-48 24 24 0 1 0 0 48m0-432a24 24 0 1 0 0 48 24 24 0 1 0 0-48m192 432a24 24 0 1 0 0-48 24 24 0 1 0 0 48m0-384a24 24 0 1 0 0-48 24 24 0 1 0 0 48M32 40a24 24 0 1 0 0 48 24 24 0 1 0 0-48m384 240a24 24 0 1 0 0-48 24 24 0 1 0 0 48M32 232a24 24 0 1 0 0 48 24 24 0 1 0 0-48m384 144a24 24 0 1 0 0-48 24 24 0 1 0 0 48M32 328a24 24 0 1 0 0 48 24 24 0 1 0 0-48m384-144a24 24 0 1 0 0-48 24 24 0 1 0 0 48M32 136a24 24 0 1 0 0 48 24 24 0 1 0 0-48"})
);

export default LanBorderNone;
