import React from 'react';

export const LanCropAltThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M112 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v88H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h88v264c0 22.1 17.9 40 40 40h216v-16H136c-13.3 0-24-10.7-24-24zm288 496c0 4.4 3.6 8 8 8s8-3.6 8-8v-88h88c4.4 0 8-3.6 8-8s-3.6-8-8-8h-88V136c0-22.1-17.9-40-40-40H160v16h216c13.3 0 24 10.7 24 24z"})
);

export default LanCropAltThin;
