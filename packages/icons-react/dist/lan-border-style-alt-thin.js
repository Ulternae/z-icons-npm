import React from 'react';

export const LanBorderStyleAltThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M448 56c0-4.4-3.6-8-8-8s-8 3.6-8 8v360c0 26.5-21.5 48-48 48H24c-4.4 0-8 3.6-8 8s3.6 8 8 8h360c35.3 0 64-28.7 64-64zM320 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32m-192 0a16 16 0 1 0 0-32 16 16 0 1 0 0 32m96-32a16 16 0 1 0 0 32 16 16 0 1 0 0-32M32 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0 160a16 16 0 1 0 0 32 16 16 0 1 0 0-32m0-64a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0 160a16 16 0 1 0 0 32 16 16 0 1 0 0-32"})
);

export default LanBorderStyleAltThin;
