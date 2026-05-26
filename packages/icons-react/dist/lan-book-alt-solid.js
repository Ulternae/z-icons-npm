import React from 'react';

export const LanBookAltSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M384 512H96c-53 0-96-43-96-96V96C0 43 43 0 96 0h304c26.5 0 48 21.5 48 48v288c0 20.9-13.4 38.7-32 45.3V448c17.7 0 32 14.3 32 32s-14.3 32-32 32zM96 384c-17.7 0-32 14.3-32 32s14.3 32 32 32h256v-64z"})
);

export default LanBookAltSolid;
