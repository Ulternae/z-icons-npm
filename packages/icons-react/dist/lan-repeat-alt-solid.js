import React from 'react';

export const LanRepeatAltSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -15.975 512 543.95',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M470.6 118.6c6-6 9.4-14.1 9.4-22.6s-3.4-16.6-9.4-22.6l-80-80c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L370.7 64H192C86 64 0 150 0 256c0 17.7 14.3 32 32 32s32-14.3 32-32c0-70.7 57.3-128 128-128h178.7l-25.4 25.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l80-80zM41.4 393.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6l80 80c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L141.3 448H320c106 0 192-86 192-192 0-17.7-14.3-32-32-32s-32 14.3-32 32c0 70.7-57.3 128-128 128H141.3l25.4-25.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-80 80z"})
);

export default LanRepeatAltSolid;
