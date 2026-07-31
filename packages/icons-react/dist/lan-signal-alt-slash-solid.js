import React from 'react';

export const LanSignalAltSlashSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.95 576 576.1',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-57-57V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v318.2l-64-64V160c0-17.7-14.3-32-32-32s-32 14.3-32 32v94.2l-279-279zm342.6 478.3L320 389.8V448c0 17.7 14.3 32 32 32 15.8 0 29-11.5 31.6-26.6M256 325.8l-57.4-57.4c-4.2 5.4-6.6 12.2-6.6 19.5v160c0 17.7 14.3 32 32 32s32-14.3 32-32V325.7zM128 416c0-17.7-14.3-32-32-32s-32 14.3-32 32v32c0 17.7 14.3 32 32 32s32-14.3 32-32z"})
);

export default LanSignalAltSlashSolid;
