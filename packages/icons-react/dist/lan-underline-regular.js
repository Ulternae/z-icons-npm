import React from 'react';

export const LanUnderlineRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24h16v184c0 83.9 68.1 152 152 152s152-68.1 152-152V48h16c13.3 0 24-10.7 24-24S373.3 0 360 0h-80c-13.3 0-24 10.7-24 24s10.7 24 24 24h16v184c0 57.4-46.6 104-104 104S88 289.4 88 232V48h16c13.3 0 24-10.7 24-24S117.3 0 104 0zM0 488c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24s-10.7-24-24-24H24c-13.3 0-24 10.7-24 24"})
);

export default LanUnderlineRegular;
