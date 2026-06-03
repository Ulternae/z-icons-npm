import React from 'react';

export const LanFilterSlashThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32.125 576.025 575.95',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M13.7-29.8c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l560 560c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L352 308.5v-7.3l182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S524.9 64 512 64H107.4zM123.4 80H512c6.5 0 12.3 3.9 14.8 9.9s1.1 12.9-3.5 17.4L340.7 289.9c-1.3 1.3-2.3 2.7-3.1 4.3zM224 301.3V416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S352 492.9 352 480v-80.8l-16-16V480c0 6.5-3.9 12.3-9.9 14.8s-12.9 1.1-17.4-3.5l-64-64c-3-3-4.7-7.1-4.7-11.3V301.3c0-4.2-1.7-8.3-4.7-11.3L224 278.7z"})
);

export default LanFilterSlashThin;
