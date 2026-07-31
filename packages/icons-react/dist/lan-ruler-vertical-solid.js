import React from 'react';

export const LanRulerVerticalSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 256 576',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 16c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48v24H152c-13.3 0-24 10.7-24 24s10.7 24 24 24h104v48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h72v48H152c-13.3 0-24 10.7-24 24s10.7 24 24 24h104v48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h72v48H152c-13.3 0-24 10.7-24 24s10.7 24 24 24h104v24c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48z"})
);

export default LanRulerVerticalSolid;
