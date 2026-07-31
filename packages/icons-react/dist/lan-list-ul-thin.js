import React from 'react';

export const LanListUlThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M32 80a16 16 0 1 0 0 32 16 16 0 1 0 0-32m0 160a16 16 0 1 0 0 32 16 16 0 1 0 0-32m16 176a16 16 0 1 0-32 0 16 16 0 1 0 32 0m96-328c-4.4 0-8 3.6-8 8s3.6 8 8 8h352c4.4 0 8-3.6 8-8s-3.6-8-8-8zm0 160c-4.4 0-8 3.6-8 8s3.6 8 8 8h352c4.4 0 8-3.6 8-8s-3.6-8-8-8zm0 160c-4.4 0-8 3.6-8 8s3.6 8 8 8h352c4.4 0 8-3.6 8-8s-3.6-8-8-8z"})
);

export default LanListUlThin;
