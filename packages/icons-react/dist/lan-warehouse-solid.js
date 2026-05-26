import React from 'react';

export const LanWarehouseSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 142.1V480c0 17.7 14.3 32 32 32s32-14.3 32-32V240c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32v240c0 17.7 14.3 32 32 32s32-14.3 32-32V142.1c0-27.5-17.6-52-43.8-60.7l-229-76.3c-9.9-3.3-20.5-3.3-30.4 0l-229 76.3C17.6 90.1 0 114.6 0 142.1M464 256H112v64h352zM112 416h352v-64H112zm352 32H112v64h352z"})
);

export default LanWarehouseSolid;
