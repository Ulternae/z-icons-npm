import React from 'react';

export const LanFlagAltThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M16 8c0-4.4-3.6-8-8-8S0 3.6 0 8v496c0 4.4 3.6 8 8 8s8-3.6 8-8V384h420.1c6.6 0 11.9-5.3 11.9-11.9 0-2.6-.9-5.2-2.5-7.3L336 224 445.5 83.2c1.6-2.1 2.5-4.7 2.5-7.3 0-6.6-5.3-11.9-11.9-11.9H16zm0 72h411.7L323.3 214.2c-4.5 5.8-4.5 13.9 0 19.6L427.7 368H16z"})
);

export default LanFlagAltThin;
