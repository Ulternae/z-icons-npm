import React from 'react';

export const Lan0Solid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 192C0 103.6 71.6 32 160 32s160 71.6 160 160v128c0 88.4-71.6 160-160 160S0 408.4 0 320zm160-96c-53 0-96 43-96 96v128c0 53 43 96 96 96s96-43 96-96V192c0-53-43-96-96-96"})
);

export default Lan0Solid;
