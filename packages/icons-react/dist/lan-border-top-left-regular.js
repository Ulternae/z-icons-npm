import React from 'react';

export const LanBorderTopLeftRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 456c0 13.3 10.7 24 24 24s24-10.7 24-24V96c0-8.8 7.2-16 16-16h360c13.3 0 24-10.7 24-24s-10.7-24-24-24H64C28.7 32 0 60.7 0 96zm256-8c0 17.7 14.3 32 32 32s32-14.3 32-32-14.3-32-32-32-32 14.3-32 32m-96 32c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32m224-32c0 17.7 14.3 32 32 32s32-14.3 32-32-14.3-32-32-32-32 14.3-32 32m32-224a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-32 96a32 32 0 1 0 64 0 32 32 0 1 0-64 0"})
);

export default LanBorderTopLeftRegular;
