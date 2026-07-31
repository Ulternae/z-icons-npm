import React from 'react';

export const LanAnglesUpDownSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-144 144c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 77.3l121.4 121.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-144-144zm144 349.3c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 434.7 70.6 313.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l144 144c12.5 12.5 32.8 12.5 45.3 0z"})
);

export default LanAnglesUpDownSolid;
