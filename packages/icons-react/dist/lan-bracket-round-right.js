import React from 'react';

export const LanBracketRoundRight = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 192 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M33.9 40.4c-4.2 7.8-1.3 17.5 6.5 21.7C80.5 83.8 160 153.4 160 256S80.5 428.2 40.4 449.9c-7.8 4.2-10.7 13.9-6.4 21.7s13.9 10.7 21.7 6.4C100.8 453.6 192 375.3 192 256S100.8 58.4 55.6 33.9c-7.8-4.2-17.5-1.3-21.7 6.4z"})
);

export default LanBracketRoundRight;
