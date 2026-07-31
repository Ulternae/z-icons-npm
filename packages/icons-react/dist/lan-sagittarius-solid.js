import React from 'react';

export const LanSagittariusSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M416 32c17.7 0 32 14.3 32 32v160c0 17.7-14.3 32-32 32s-32-14.3-32-32v-82.8L237.2 288l41.4 41.4c12.5 12.5 12.5 32.8 0 45.2s-32.8 12.5-45.3 0L192 333.3 54.6 470.6c-12.5 12.5-32.8 12.5-45.2 0s-12.5-32.8 0-45.2L146.8 288l-41.4-41.4c-12.5-12.5-12.5-32.8 0-45.2s32.8-12.5 45.2 0l41.4 41.4L338.8 96H256c-17.7 0-32-14.3-32-32s14.3-32 32-32z"})
);

export default LanSagittariusSolid;
