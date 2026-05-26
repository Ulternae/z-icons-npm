import React from 'react';

export const LanCoffeeBeanSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m37.1 327.5 11-13.2C91.6 262.2 156 232 224 232c53.7 0 104.6-23.9 139-65.1l40.6-48.7c7-8.4 7.6-20.5.3-28.6q-3.15-3.6-6.6-6.9C319 4.4 177.8 18.5 82.1 114.2 22.9 173.4-5.1 250 .7 318.4c1.6 18.8 24.3 23.7 36.4 9.2zm7.3 66.3c-7 8.4-7.6 20.5-.3 28.6q3.15 3.6 6.6 6.9c78.3 78.3 219.5 64.2 315.2-31.5 59.2-59.2 87.2-135.8 81.4-204.2-1.6-18.8-24.3-23.7-36.4-9.2l-11 13.2A228.92 228.92 0 0 1 224 280c-53.7 0-104.6 23.9-139 65.1z"})
);

export default LanCoffeeBeanSolid;
