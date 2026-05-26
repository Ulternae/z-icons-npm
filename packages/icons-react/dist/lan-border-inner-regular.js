import React from 'react';

export const LanBorderInnerRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M416 280c13.3 0 24-10.7 24-24s-10.7-24-24-24H248V64c0-13.3-10.7-24-24-24s-24 10.7-24 24v168H32c-13.3 0-24 10.7-24 24s10.7 24 24 24h168v168c0 13.3 10.7 24 24 24s24-10.7 24-24V280zM56 448a24 24 0 1 0-48 0 24 24 0 1 0 48 0M32 88a24 24 0 1 0 0-48 24 24 0 1 0 0 48m24 72a24 24 0 1 0-48 0 24 24 0 1 0 48 0m360 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48M56 352a24 24 0 1 0-48 0 24 24 0 1 0 48 0m360 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48m-264 72a24 24 0 1 0-48 0 24 24 0 1 0 48 0M128 88a24 24 0 1 0 0-48 24 24 0 1 0 0 48m216 360a24 24 0 1 0-48 0 24 24 0 1 0 48 0M320 88a24 24 0 1 0 0-48 24 24 0 1 0 0 48m120 360a24 24 0 1 0-48 0 24 24 0 1 0 48 0M416 88a24 24 0 1 0 0-48 24 24 0 1 0 0 48"})
);

export default LanBorderInnerRegular;
