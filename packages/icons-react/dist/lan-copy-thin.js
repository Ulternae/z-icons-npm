import React from 'react';

export const LanCopyThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M144 64c0-26.5 21.5-48 48-48h136.8c12.7 0 24.9 5.1 33.9 14.1l55.2 55.2c9 9 14.1 21.2 14.1 33.9V320c0 26.5-21.5 48-48 48H192c-26.5 0-48-21.5-48-48zm48-64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V119.2c0-17-6.7-33.3-18.7-45.3l-55.2-55.2C362.1 6.7 345.8 0 328.8 0zM64 128c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64v-16h-16v16c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V192c0-26.5 21.5-48 48-48h16v-16z"})
);

export default LanCopyThin;
