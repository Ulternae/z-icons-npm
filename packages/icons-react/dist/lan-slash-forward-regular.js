import React from 'react';

export const LanSlashForwardRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M308.1 3.3c11.4 6.7 15.3 21.4 8.6 32.8l-272 464c-6.7 11.4-21.4 15.3-32.8 8.6s-15.3-21.4-8.6-32.8l272-464C282 .4 296.7-3.4 308.1 3.3"})
);

export default LanSlashForwardRegular;
