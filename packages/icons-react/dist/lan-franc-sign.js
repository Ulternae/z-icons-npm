import React from 'react';

export const LanFrancSign = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M80 32c-8.8 0-16 7.2-16 16v272H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v112c0 8.8 7.2 16 16 16s16-7.2 16-16V352h112c8.8 0 16-7.2 16-16s-7.2-16-16-16H96v-96h176c8.8 0 16-7.2 16-16s-7.2-16-16-16H96V64h208c8.8 0 16-7.2 16-16s-7.2-16-16-16z"})
);

export default LanFrancSign;
