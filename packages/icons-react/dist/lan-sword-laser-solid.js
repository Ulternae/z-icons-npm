import React from 'react';

export const LanSwordLaserSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -52.889 640 615.664',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m328.7 326.5 8.5 8.5c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-96-96c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l8.5 8.5L579.1-45.3c11.9-10.6 29.9-10 41.1 1.2s11.8 29.4 1.3 41.2zm-47.1 64.1-30.1 30.1-96-96 30.1-30.1zm-78.1 78.1-96-96 25.4-25.4 96 96zM85 395.3l96 96-62.1 62.1c-12.5 12.5-32.8 12.5-45.3 0l-50.7-50.8c-12.5-12.5-12.5-32.8 0-45.3z"})
);

export default LanSwordLaserSolid;
