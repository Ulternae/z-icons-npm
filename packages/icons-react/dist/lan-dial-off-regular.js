import React from 'react';

export const LanDialOffRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M288 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-24 224v109.4c-50.3-11-88-55.8-88-109.4 0-61.9 50.1-112 112-112s112 50.1 112 112c0 53.6-37.7 98.4-88 109.4V288c0-13.3-10.7-24-24-24s-24 10.7-24 24m24 160a160 160 0 1 0 0-320 160 160 0 1 0 0 320m288-160a32 32 0 1 0-64 0 32 32 0 1 0 64 0M32 320a32 32 0 1 0 0-64 32 32 0 1 0 0 64m96-224a32 32 0 1 0-64 0 32 32 0 1 0 64 0m352 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64M128 480a32 32 0 1 0-64 0 32 32 0 1 0 64 0m352 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64"})
);

export default LanDialOffRegular;
