import React from 'react';

export const LanSlashBackRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M11.9 3.3C.4 10-3.4 24.7 3.3 36.1l272 464c6.7 11.4 21.4 15.3 32.8 8.6s15.3-21.4 8.6-32.8l-272-464C38 .4 23.3-3.4 11.9 3.3"})
);

export default LanSlashBackRegular;
