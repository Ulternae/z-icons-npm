import React from 'react';

export const LanBootHeeledSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 0H35.8C16.7 0 1.8 16.6 3.9 35.5l23 206.7c3.4 30.2 1.3 60.8-6.1 90.4l-17 68.1C1.3 410.9 0 421.3 0 431.8V480c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32l112.7 28.2c10.2 2.5 20.6 3.8 31 3.8H416c17.7 0 32-14.3 32-32v-43.2c0-22.8-12.1-43.8-31.8-55.3L292 309c-21.9-12.8-34.2-37.2-31.4-62.4l23.5-211.1C286.2 16.6 271.3 0 252.2 0H144v200c0 13.3-10.7 24-24 24s-24-10.7-24-24z"})
);

export default LanBootHeeledSolid;
