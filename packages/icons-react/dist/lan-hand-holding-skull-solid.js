import React from 'react';

export const LanHandHoldingSkullSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M432 104c0-66.3-64.5-120-144-120S144 37.7 144 104c0 35.5 18.5 67.5 48 89.4V224c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-30.6c29.5-22 48-53.9 48-89.4M240 80a32 32 0 1 1 0 64 32 32 0 1 1 0-64m64 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0M109.3 341.5 66.7 384H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h320.5c29 0 57.3-9.3 80.7-26.5l126.6-93.3c17.8-13.1 21.6-38.1 8.5-55.9s-38.1-21.6-55.9-8.5L392.6 416H280c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c17.7 0 32-14.3 32-32s-14.3-32-32-32H199.8c-33.9 0-66.5 13.5-90.5 37.5"})
);

export default LanHandHoldingSkullSolid;
