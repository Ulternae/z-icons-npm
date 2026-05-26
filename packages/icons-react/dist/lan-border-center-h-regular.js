import React from 'react';

export const LanBorderCenterHRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M32 40a24 24 0 1 1 0 48 24 24 0 1 1 0-48M8 256c0-13.3 10.7-24 24-24h384c13.3 0 24 10.7 24 24s-10.7 24-24 24H32c-13.3 0-24-10.7-24-24M440 64a24 24 0 1 1-48 0 24 24 0 1 1 48 0M320 40a24 24 0 1 1 0 48 24 24 0 1 1 0-48m24 408a24 24 0 1 1-48 0 24 24 0 1 1 48 0M128 40a24 24 0 1 1 0 48 24 24 0 1 1 0-48m120 24a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-24 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-72 312a24 24 0 1 1-48 0 24 24 0 1 1 48 0m72-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48m24-72a24 24 0 1 1-48 0 24 24 0 1 1 48 0M32 136a24 24 0 1 1 0 48 24 24 0 1 1 0-48m408 24a24 24 0 1 1-48 0 24 24 0 1 1 48 0M32 328a24 24 0 1 1 0 48 24 24 0 1 1 0-48m408 24a24 24 0 1 1-48 0 24 24 0 1 1 48 0M32 424a24 24 0 1 1 0 48 24 24 0 1 1 0-48m408 24a24 24 0 1 1-48 0 24 24 0 1 1 48 0"})
);

export default LanBorderCenterHRegular;
