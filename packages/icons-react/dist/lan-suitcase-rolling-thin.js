import React from 'react';

export const LanSuitcaseRollingThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 384 584',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M112 8v88h160V8c0-13.3-10.7-24-24-24H136c-13.3 0-24 10.7-24 24M96 96V8c0-22.1 17.9-40 40-40h112c22.1 0 40 17.9 40 40v88h32c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64h-8v32c0 4.4-3.6 8-8 8s-8-3.6-8-8v-32H72v32c0 4.4-3.6 8-8 8s-8-3.6-8-8v-32.5C24.4 507.6 0 480.6 0 448V160c0-35.3 28.7-64 64-64zm184 16H64c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48V160c0-26.5-21.5-48-48-48zM80 248c0-4.4 3.6-8 8-8h208c4.4 0 8 3.6 8 8s-3.6 8-8 8H88c-4.4 0-8-3.6-8-8m0 112c0-4.4 3.6-8 8-8h208c4.4 0 8 3.6 8 8s-3.6 8-8 8H88c-4.4 0-8-3.6-8-8"})
);

export default LanSuitcaseRollingThin;
