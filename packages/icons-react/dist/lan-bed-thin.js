import React from 'react';

export const LanBedThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M16 40c0-4.4-3.6-8-8-8s-8 3.6-8 8v432c0 4.4 3.6 8 8 8s8-3.6 8-8v-88h544v88c0 4.4 3.6 8 8 8s8-3.6 8-8V256c0-57.4-46.6-104-104-104H312c-22.1 0-40 17.9-40 40v176H16zm544 216v112H288V192c0-13.3 10.7-24 24-24h160c48.6 0 88 39.4 88 88M80 240a64 64 0 1 1 128 0 64 64 0 1 1-128 0m144 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0"})
);

export default LanBedThin;
