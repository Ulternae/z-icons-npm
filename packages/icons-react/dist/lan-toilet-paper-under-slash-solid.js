import React from 'react';

export const LanToiletPaperUnderSlashSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.95 576 576.063',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M7-24.9c9.4-9.4 24.6-9.4 33.9 0l63 63c7.7-4 15.8-6.1 24.1-6.1h231.1c-8.8 11.1-16 23.1-21.9 34.8C315.8 109.5 304 165.2 304 224c0 4.8.1 9.6.2 14.4l54 54c-4.1-21.3-6.3-44.3-6.3-68.4 0-106 43-192 96-192s96 86 96 192v254.2l25 25c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L7 9.1c-9.3-9.4-9.3-24.6 0-34M474.2 544H216c-30.9 0-56-25.1-56-56v-24h234.2zM48 117.8 346.2 416H128c-53 0-96-86-96-192 0-39.3 5.9-75.8 16-106.2M416 224c0 35.3 14.3 64 32 64s32-28.7 32-64-14.3-64-32-64-32 28.7-32 64"})
);

export default LanToiletPaperUnderSlashSolid;
