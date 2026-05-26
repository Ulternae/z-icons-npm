import React from 'react';

export const LanSlashForwardThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M316.2 1.2c3.8 2.3 4.9 7.2 2.6 11l-304 496c-2.3 3.8-7.2 4.9-11 2.6s-4.9-7.2-2.6-11l304-496c2.3-3.8 7.2-4.9 11-2.6"})
);

export default LanSlashForwardThin;
