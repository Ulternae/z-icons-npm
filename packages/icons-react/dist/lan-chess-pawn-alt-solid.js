import React from 'react';

export const LanChessPawnAltSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 128c0 24.6-9.2 47-24.4 64h.4c13.3 0 24 10.7 24 24s-10.7 24-24 24h-5.3L240 384l56.2 70.3c5 6.3 7.8 14.1 7.8 22.2 0 19.6-15.9 35.5-35.5 35.5h-217C31.9 512 16 496.1 16 476.5c0-8.1 2.7-15.9 7.8-22.2L80 384l13.3-144H88c-13.3 0-24-10.7-24-24s10.7-24 24-24h.4C73.2 175 64 152.6 64 128c0-53 43-96 96-96s96 43 96 96"})
);

export default LanChessPawnAltSolid;
