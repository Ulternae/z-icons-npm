import React from 'react';

export const LanArrowUTurnUpRightRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -16.05 512.05 528.05',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M505 145c9.4-9.4 9.4-24.6 0-33.9L385-9c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l79 79H188C84.2 104 0 188.2 0 292s84.2 188 188 188h236l2.5-.1c12.1-1.2 21.5-11.5 21.5-23.9s-9.4-22.6-21.5-23.9l-2.5-.1H188c-77.3 0-140-62.7-140-140s62.7-140 140-140h242.1l-79 79-1.7 1.8c-7.7 9.4-7.1 23.3 1.7 32.1s22.7 9.3 32.1 1.7l1.8-1.6z"})
);

export default LanArrowUTurnUpRightRegular;
