import React from 'react';

export const LanSignalSlashThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32.125 576.025 575.95',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M13.7-29.8c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l560 560c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L512 468.6V40c0-4.4-3.6-8-8-8s-8 3.6-8 8v412.6l-96-96V136c0-4.4-3.6-8-8-8s-8 3.6-8 8v204.6zm282.3 373-16-16V472c0 4.4 3.6 8 8 8s8-3.6 8-8zM184 320c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8s8-3.6 8-8V328c0-4.4-3.6-8-8-8M72 384c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8s8-3.6 8-8v-80c0-4.4-3.6-8-8-8"})
);

export default LanSignalSlashThin;
