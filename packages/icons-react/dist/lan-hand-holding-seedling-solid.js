import React from 'react';

export const LanHandHoldingSeedlingSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M96 14.5C96 94.9 161.1 160 241.5 160H256v64c0 17.7 14.3 32 32 32s32-14.3 32-32v-64h14.5C414.9 160 480 94.9 480 14.5c0-8-6.5-14.5-14.5-14.5H416c-52.3 0-98.8 25.1-128 64-29.2-38.9-75.7-64-128-64h-49.5C102.5 0 96 6.5 96 14.5m13.3 326.9L66.7 384H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h320.5c29 0 57.3-9.3 80.7-26.5l126.6-93.3c17.8-13.1 21.6-38.1 8.5-55.9s-38.1-21.6-55.9-8.5L392.6 416H280c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c17.7 0 32-14.3 32-32s-14.3-32-32-32H199.8c-33.9 0-66.5 13.5-90.5 37.5z"})
);

export default LanHandHoldingSeedlingSolid;
