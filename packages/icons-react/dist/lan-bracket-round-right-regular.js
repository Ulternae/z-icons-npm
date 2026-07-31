import React from 'react';

export const LanBracketRoundRightRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 192 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M35.4 43.7c-6.8 11.4-3 26.1 8.3 32.9C76.7 96.2 144 160.7 144 256S76.7 415.7 43.7 435.4c-11.4 6.8-15.1 21.5-8.3 32.9s21.5 15.1 32.9 8.3C110 451.8 192 374.1 192 256S110 60.2 68.3 35.4c-11.4-6.8-26.1-3-32.9 8.3"})
);

export default LanBracketRoundRightRegular;
