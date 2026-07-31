import React from 'react';

export const LanJRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M296 32c13.3 0 24 10.7 24 24v264c0 88.4-71.6 160-160 160S0 408.4 0 320v-40c0-13.3 10.7-24 24-24s24 10.7 24 24v40c0 61.9 50.1 112 112 112s112-50.1 112-112V56c0-13.3 10.7-24 24-24"})
);

export default LanJRegular;
