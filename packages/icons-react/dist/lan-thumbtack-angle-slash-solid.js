import React from 'react';

export const LanThumbtackAngleSlashSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.95 576 576.1',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L382.4 316.7l96.4-112.5 10.5 10.5c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l10.6 10.4-112.5 96.4zm62.6 198.3-1.4.7-2.8 1.4c-9.3 4.6-15.7 13.3-17.4 23.5s1.7 20.5 9 27.8L317.3 453c7.3 7.3 17.6 10.6 27.8 9s18.9-8.1 23.5-17.3l1.4-2.8.7-1.4zm-62.2 284c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l106.2-106.2-45.3-45.3z"})
);

export default LanThumbtackAngleSlashSolid;
