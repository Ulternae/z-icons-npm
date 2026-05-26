import React from 'react';

export const LanGamepadThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448 64c106 0 192 86 192 192s-86 192-192 192H192C86 448 0 362 0 256S86 64 192 64zM192 80C94.8 80 16 158.8 16 256s78.8 176 176 176h256c97.2 0 176-78.8 176-176S545.2 80 448 80zm0 104c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8s-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8s-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8s3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8m240 136a16 16 0 1 1 0-32 16 16 0 1 1 0 32m64-96a16 16 0 1 1 0-32 16 16 0 1 1 0 32"})
);

export default LanGamepadThin;
