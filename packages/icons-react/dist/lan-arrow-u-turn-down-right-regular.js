import React from 'react';

export const LanArrowUTurnDownRightRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512.05 528.05',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M505 367c9.4 9.4 9.4 24.6 0 33.9L385 521c-9.4 9.4-24.6 9.4-33.9 0-9.4-9.4-9.4-24.6 0-33.9l79-79H188C84.2 408 0 323.8 0 220S84.2 32 188 32h236l2.5.1C438.6 33.4 448 43.6 448 56s-9.4 22.6-21.5 23.9l-2.5.1H188c-77.3 0-140 62.7-140 140s62.7 140 140 140h242.1l-79-79-1.7-1.8c-7.7-9.4-7.1-23.3 1.7-32.1s22.7-9.3 32.1-1.7l1.8 1.6z"})
);

export default LanArrowUTurnDownRightRegular;
