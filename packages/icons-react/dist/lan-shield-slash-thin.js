import React from 'react';

export const LanShieldSlashThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32.125 576.025 575.95',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M13.7-29.8c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l560 560c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-131-131c66.1-86.5 85.1-191.9 85.4-259.3.1-26.2-16.3-47.9-38.3-57.2L313 7.8c-16-6.8-34-6.8-50 0L114.3 70.9zM126.5 83.1l142.8-60.5c12-5.1 25.5-5.1 37.5 0l176.7 75c16.6 7.1 28.6 23.2 28.5 42.4-.3 65.2-18.6 165.4-80.8 247.9zM64 139.9c0-8.3 2.2-16 6.1-22.7l-11.6-11.6c-6.6 9.7-10.5 21.5-10.5 34.3.5 99.2 41.3 280.7 213.6 363.2 16.7 8 36.1 8 52.8 0 32.9-15.7 60.9-35 84.8-56.7L387.8 435c-22.7 20.5-49.3 38.8-80.4 53.6-12.3 5.9-26.7 5.9-39 0C104.2 410 64.3 236.4 63.8 139.8z"})
);

export default LanShieldSlashThin;
