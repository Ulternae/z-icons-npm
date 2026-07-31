import React from 'react';

export const LanDiceD4Thin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -13.4 576 548.825',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M263.7-1.7c12.8-15.6 36.8-15.6 49.6 0l242.4 296.3c11.4 13.9 9.1 34.5-5.1 45.5L308.1 528.7l-4.5 2.9c-9.4 5.1-20.8 5.1-30.3 0l-4.5-2.9L26.4 340.1c-13.3-10.3-16.2-29-7.1-42.8l2-2.7zm32.8 519c.6-.4 1.2-.7 1.8-1.2l242.5-188.6 2.4-2.3c4.2-4.9 5-12 2-17.7l-1.8-2.7L300.9 8.5c-1.3-1.5-2.8-2.8-4.4-3.7v512.6zM278.7 5.8l-2.6 2.6L33.6 304.7c-5.7 7-4.5 17.2 2.6 22.7L278.7 516l1.8 1.2V4.7c-.6.3-1.2.7-1.8 1.1"})
);

export default LanDiceD4Thin;
