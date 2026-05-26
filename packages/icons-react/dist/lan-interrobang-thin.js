import React from 'react';

export const LanInterrobangThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M160 16C80.5 16 16 80.5 16 160c0 4.4-3.6 8-8 8s-8-3.6-8-8C0 71.6 71.6 0 160 0s160 71.6 160 160c0 65.1-38.8 121.1-94.6 146.1-31.3 14-57.4 39.4-57.4 69.9v24c0 4.4-3.6 8-8 8s-8-3.6-8-8V136c0-4.4 3.6-8 8-8s8 3.6 8 8v194.4c12.9-17.2 31.9-30.4 50.9-38.9C269.1 269 304 218.6 304 160c0-79.5-64.5-144-144-144m16 480c0 8.8-7.2 16-16 16s-16-7.2-16-16 7.2-16 16-16 16 7.2 16 16"})
);

export default LanInterrobangThin;
