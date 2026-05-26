import React from 'react';

export const LanChimneyRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M48 176h352V80H48zM0 64c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32v240c0 13.3-10.7 24-24 24s-24-10.7-24-24v-80h-80v80c0 13.3-10.7 24-24 24s-24-10.7-24-24v-80H80v80c0 13.3-10.7 24-24 24s-24-10.7-24-24V224c-17.7 0-32-14.3-32-32zm80 160v112h80V224zm128 0v112h160V224z"})
);

export default LanChimneyRegular;
