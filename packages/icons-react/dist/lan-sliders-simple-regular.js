import React from 'react';

export const LanSlidersSimpleRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M80 400a32 32 0 1 1 0-64 32 32 0 1 1 0 64m76.3-56c-10.2-32.5-40.5-56-76.3-56-44.2 0-80 35.8-80 80s35.8 80 80 80c35.8 0 66.1-23.5 76.3-56H488c13.3 0 24-10.7 24-24s-10.7-24-24-24zM464 144a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-108.3-24H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h331.7c10.2 32.5 40.5 56 76.3 56 44.2 0 80-35.8 80-80s-35.8-80-80-80c-35.8 0-66.1 23.5-76.3 56"})
);

export default LanSlidersSimpleRegular;
