import React from 'react';

export const LanCassetteTapeThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448 80c26.5 0 48 21.5 48 48v256c0 26.5-21.5 48-48 48h-21.3L411 384.8c-6.5-19.6-24.9-32.8-45.5-32.8H146.7c-20.7 0-39 13.2-45.5 32.8L85.3 432H64c-26.5 0-48-21.5-48-48V128c0-26.5 21.5-48 48-48zm-16 368h16c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64zm-22.2-16H102.2l14-42.1c4.4-13.1 16.6-21.9 30.4-21.9h218.8c13.8 0 26 8.8 30.4 21.9zM128 176a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 112h256c35.3 0 64-28.7 64-64s-28.7-64-64-64H128c-35.3 0-64 28.7-64 64s28.7 64 64 64m213.7-16H170.4c13.3-11.7 21.7-28.9 21.7-48s-8.4-36.3-21.7-48h171.3c-13.3 11.7-21.7 28.9-21.7 48s8.4 36.3 21.7 48m42.3 0a48 48 0 1 1 0-96 48 48 0 1 1 0 96"})
);

export default LanCassetteTapeThin;
