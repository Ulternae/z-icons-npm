import React from 'react';

export const LanMugMarshmallowsSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M288 0h96c17.7 0 32 14.3 32 32v48H96V64c0-17.7 14.3-32 32-32h128c0-17.7 14.3-32 32-32M96 128h48v104c0 13.3 10.7 24 24 24s24-10.7 24-24V128h256c70.7 0 128 57.3 128 128s-57.3 128-128 128c0 53-43 96-96 96H160c-53 0-96-43-96-96V160c0-17.7 14.3-32 32-32m352 192c35.3 0 64-28.7 64-64s-28.7-64-64-64z"})
);

export default LanMugMarshmallowsSolid;
