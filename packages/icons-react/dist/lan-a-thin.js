import React from 'react';

export const LanAThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M199.4 36.9c-1.3-3-4.2-4.9-7.4-4.9s-6.1 1.9-7.4 4.9l-184 432c-1.7 4.1.2 8.8 4.2 10.5s8.8-.2 10.5-4.2L61 368h262l45.6 107.1c1.7 4.1 6.4 6 10.5 4.2s6-6.4 4.2-10.5l-184-432zM316.2 352H67.8L192 60.4z"})
);

export default LanAThin;
