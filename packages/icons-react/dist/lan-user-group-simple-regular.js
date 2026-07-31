import React from 'react';

export const LanUserGroupSimpleRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M176 192a64 64 0 1 0 0-128 64 64 0 1 0 0 128m0-176a112 112 0 1 1 0 224 112 112 0 1 1 0-224m-24 320c-57.4 0-104 46.6-104 104v16c0 13.3-10.7 24-24 24S0 469.3 0 456v-16c0-83.9 68.1-152 152-152h48c83.9 0 152 68.1 152 152v16c0 13.3-10.7 24-24 24s-24-10.7-24-24v-16c0-57.4-46.6-104-104-104zm312-144a64 64 0 1 0 0-128 64 64 0 1 0 0 128m0-176a112 112 0 1 1 0 224 112 112 0 1 1 0-224m36.8 416c50.4 0 91.2-40.8 91.2-91.2 0-2.6-2.2-4.8-4.8-4.8H370.9c-10.8-17.7-24.3-33.6-39.8-47.1 3.2-.6 6.4-.9 9.8-.9h246.4c29.2 0 52.8 23.6 52.8 52.8 0 76.9-62.3 139.2-139.2 139.2h-73.6c-10.4 0-20.5-1.1-30.2-3.3q3-9.9 3-20.7v-16c0-4.1-.1-8.2-.4-12.2 8.7 2.8 18 4.2 27.6 4.2h73.6z"})
);

export default LanUserGroupSimpleRegular;
