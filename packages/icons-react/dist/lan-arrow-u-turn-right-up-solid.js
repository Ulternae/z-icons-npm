import React from 'react';

export const LanArrowUTurnRightUpSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M396.3 7.2c12.6-10.3 31.1-9.5 42.8 2.2l112 112c12.5 12.5 12.5 32.8 0 45.2s-32.8 12.5-45.2 0l-57.4-57.4V320c0 102.7-80.7 186.6-182.1 191.8l-9.9.2c-106 0-192-86-192-192V96l.2-3.3C66.3 76.6 79.9 64 96.5 64s30.2 12.6 31.8 28.7l.2 3.3v224c0 70.7 57.3 128 128 128l6.6-.2c67.6-3.4 121.4-59.4 121.4-127.8V109.2l-57.4 57.4-2.4 2.2c-12.6 10.2-31.1 9.5-42.8-2.2s-12.4-30.2-2.2-42.8l2.2-2.4 112-112z"})
);

export default LanArrowUTurnRightUpSolid;
