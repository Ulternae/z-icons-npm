import React from 'react';

export const LanCrateEmptyRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M56 272c-4.4 0-8 3.6-8 8v64h416v-64c0-4.4-3.6-8-8-8zm-8 120v64c0 4.4 3.6 8 8 8h400c4.4 0 8-3.6 8-8v-64zM0 280c0-30.9 25.1-56 56-56h400c30.9 0 56 25.1 56 56v176c0 30.9-25.1 56-56 56H56c-30.9 0-56-25.1-56-56zm400 24a16 16 0 1 1 32 0 16 16 0 1 1-32 0m16 112a16 16 0 1 1 0 32 16 16 0 1 1 0-32M80 304a16 16 0 1 1 32 0 16 16 0 1 1-32 0m16 112a16 16 0 1 1 0 32 16 16 0 1 1 0-32"})
);

export default LanCrateEmptyRegular;
