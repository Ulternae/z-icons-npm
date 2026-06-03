import React from 'react';

export const LanPersonPinballSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 512 576.1',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M480-32c17.7 0 32 14.3 32 32v512c0 17.7-14.3 32-32 32s-32-14.3-32-32V384H224v128c0 17.7-14.3 32-32 32s-32-14.3-32-32V299l-48-61.7v274.8c0 17.7-14.3 32-32 32s-32-14.3-32-32V378.6l-.2-3.2c-.6-6.3-3.1-12.2-7.1-17.1l-2.1-2.3-10.5-10.5C10.1 327.4 0 303 0 277.5V171.7c0-33 26.7-59.7 59.7-59.7l4.3.1c21.1 1.2 40.7 11.5 53.8 28.2l81.7 105.2L431 194.1 387.3 63c-2.2-6.5-3.3-13.3-3.3-20.2V0l.2-3.3C385.8-19.4 399.4-32 416-32zM248 288a24 24 0 1 0 0 48 24 24 0 1 0 0-48M64 80a56 56 0 1 1 0-112 56 56 0 1 1 0 112"})
);

export default LanPersonPinballSolid;
