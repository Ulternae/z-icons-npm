import React from 'react';

export const LanPlus = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M240 48c0-8.8-7.2-16-16-16s-16 7.2-16 16v192H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h192v192c0 8.8 7.2 16 16 16s16-7.2 16-16V272h192c8.8 0 16-7.2 16-16s-7.2-16-16-16H240z"})
);

export default LanPlus;
