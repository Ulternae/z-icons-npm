import React from 'react';

export const LanShelvesEmptyThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16 8c0-4.4-3.6-8-8-8S0 3.6 0 8v496c0 4.4 3.6 8 8 8s8-3.6 8-8v-56h480v56c0 4.4 3.6 8 8 8s8-3.6 8-8V8c0-4.4-3.6-8-8-8s-8 3.6-8 8v168H16zm0 184h480v240H16z"})
);

export default LanShelvesEmptyThin;
