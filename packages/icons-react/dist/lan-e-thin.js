import React from 'react';

export const LanEThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M8 32c-4.4 0-8 3.6-8 8v432c0 4.4 3.6 8 8 8h304c4.4 0 8-3.6 8-8s-3.6-8-8-8H16V256h232c4.4 0 8-3.6 8-8s-3.6-8-8-8H16V48h296c4.4 0 8-3.6 8-8s-3.6-8-8-8z"})
);

export default LanEThin;
