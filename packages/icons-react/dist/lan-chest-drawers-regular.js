import React from 'react';

export const LanChestDrawersRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M400 0c26.5 0 48 21.5 48 48v440c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8H48v8c0 13.3-10.7 24-24 24S0 501.3 0 488V48C0 21.5 21.5 0 48 0zM48 304v128h352V304zm200 32c13.3 0 24 10.7 24 24s-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24s10.7-24 24-24zM48 256h152v-80H48zm200 0h152v-80H248zM48 128h152V48H48zm200 0h152V48H248z"})
);

export default LanChestDrawersRegular;
