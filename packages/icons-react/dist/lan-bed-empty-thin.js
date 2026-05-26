import React from 'react';

export const LanBedEmptyThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M8 32c4.4 0 8 3.6 8 8v136h456c57.4 0 104 46.6 104 104v192c0 4.4-3.6 8-8 8s-8-3.6-8-8v-88H16v88c0 4.4-3.6 8-8 8s-8-3.6-8-8V40c0-4.4 3.6-8 8-8m8 336h544v-88c0-48.6-39.4-88-88-88H16z"})
);

export default LanBedEmptyThin;
