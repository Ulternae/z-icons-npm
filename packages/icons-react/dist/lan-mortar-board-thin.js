import React from 'react';

export const LanMortarBoardThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M20.9 167.3c-3-1.2-4.9-4.1-4.9-7.3s1.9-6.1 4.9-7.3l242.4-99.8c7.8-3.2 16.2-4.9 24.7-4.9s16.9 1.7 24.7 4.9l242.4 99.8c3 1.2 4.9 4.1 4.9 7.3s-1.9 6.1-4.9 7.3l-242.4 99.8c-7.8 3.2-16.2 4.9-24.7 4.9s-16.9-1.7-24.7-4.9zM16 182.6l80 32.9V384c0 53 86 96 192 96s192-43 192-96V215.5l81.2-33.4c9-3.7 14.8-12.4 14.8-22.1s-5.8-18.4-14.8-22.1L318.8 38.1c-9.8-4-20.2-6.1-30.8-6.1s-21 2.1-30.8 6.1L14.8 137.9C5.8 141.6 0 150.3 0 160v312c0 4.4 3.6 8 8 8s8-3.6 8-8zM112 384V222.1l145.2 59.8c9.8 4 20.2 6.1 30.8 6.1s21-2.1 30.8-6.1L464 222.1V384c0 17.2-14.3 37-47.4 53.6-32.1 16-77.5 26.4-128.6 26.4s-96.5-10.4-128.6-26.4C126.3 421 112 401.2 112 384"})
);

export default LanMortarBoardThin;
