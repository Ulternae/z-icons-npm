import React from 'react';

export const LanBracketRound = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 192 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M158.1 40.4c4.2 7.8 1.3 17.5-6.4 21.7C111.6 83.8 32.1 153.5 32.1 256s79.5 172.2 119.6 193.9c7.8 4.2 10.7 13.9 6.4 21.7s-13.9 10.7-21.7 6.4C91.2 453.6 0 375.3 0 256S91.2 58.4 136.4 33.9c7.8-4.2 17.5-1.3 21.7 6.4z"})
);

export default LanBracketRound;
