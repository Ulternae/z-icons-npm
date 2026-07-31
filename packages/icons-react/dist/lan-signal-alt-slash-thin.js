import React from 'react';

export const LanSignalAltSlashThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32.125 576.025 575.95',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M13.7-29.8c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l560 560c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L512 468.6V40c0-4.4-3.6-8-8-8s-8 3.6-8 8v412.6l-128-128V136c0-4.4-3.6-8-8-8s-8 3.6-8 8v172.6zm210.3 301L210.8 258c-1.7 1.5-2.8 3.6-2.8 6v208c0 4.4 3.6 8 8 8s8-3.6 8-8zM368 472v-56.8l-16-16V472c0 4.4 3.6 8 8 8s8-3.6 8-8M80 392c0-4.4-3.6-8-8-8s-8 3.6-8 8v80c0 4.4 3.6 8 8 8s8-3.6 8-8z"})
);

export default LanSignalAltSlashThin;
