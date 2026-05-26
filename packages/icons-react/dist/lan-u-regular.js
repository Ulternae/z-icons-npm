import React from 'react';

export const LanURegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M24 32c13.3 0 24 10.7 24 24v232c0 79.5 64.5 144 144 144s144-64.5 144-144V56c0-13.3 10.7-24 24-24s24 10.7 24 24v232c0 106-86 192-192 192S0 394 0 288V56c0-13.3 10.7-24 24-24"})
);

export default LanURegular;
