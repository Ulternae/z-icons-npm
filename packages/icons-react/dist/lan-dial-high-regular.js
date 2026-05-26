import React from 'react';

export const LanDialHighRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M288 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0 248h109.4c-11 50.3-55.8 88-109.4 88-61.9 0-112-50.1-112-112s50.1-112 112-112c53.6 0 98.4 37.7 109.4 88H288c-13.3 0-24 10.7-24 24s10.7 24 24 24m160-24a160 160 0 1 0-320 0 160 160 0 1 0 320 0m128 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0M32 320a32 32 0 1 0 0-64 32 32 0 1 0 0 64m96-224a32 32 0 1 0-64 0 32 32 0 1 0 64 0m352 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64M128 480a32 32 0 1 0-64 0 32 32 0 1 0 64 0m352 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64"})
);

export default LanDialHighRegular;
