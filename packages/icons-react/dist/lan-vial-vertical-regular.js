import React from 'react';

export const LanVialVerticalRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M16 24C16 10.7 26.7 0 40 0h240c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v352c0 61.9-50.1 112-112 112S48 461.9 48 400V48h-8c-13.3 0-24-10.7-24-24m80 24v144h128V48zm0 192v160c0 35.3 28.7 64 64 64s64-28.7 64-64V240z"})
);

export default LanVialVerticalRegular;
