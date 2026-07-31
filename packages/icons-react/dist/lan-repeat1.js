import React from 'react';

export const LanRepeat1 = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M448 97v-2l-64-53.3v108.7l64-53.3zm-96-17V23.5c0-13 10.5-23.5 23.5-23.5 5.5 0 10.8 1.9 15 5.4l78 65C475.8 76.5 480 85.5 480 95v2c0 9.5-4.2 18.5-11.5 24.6l-78 65c-4.2 3.5-9.5 5.4-15 5.4-13 0-23.5-10.5-23.5-23.5V112H192c-88.4 0-160 71.6-160 160 0 8.8-7.2 16-16 16s-16-7.2-16-16C0 166 86 80 192 80zM128 416v-54.4l-64 53.3v2l64 53.3v-54.4zm32-72.5V400h160c88.4 0 160-71.6 160-160 0-8.8 7.2-16 16-16s16 7.2 16 16c0 106-86 192-192 192H160v56.5c0 13-10.5 23.5-23.5 23.5-5.5 0-10.8-1.9-15-5.4l-78-65C36.2 435.5 32 426.5 32 417v-2c0-9.5 4.2-18.5 11.5-24.6l78-65c4.2-3.5 9.5-5.4 15-5.4 13 0 23.5 10.5 23.5 23.5M288 208v96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64l-6.4 4.8c-7.1 5.3-17.1 3.9-22.4-3.2s-3.9-17.1 3.2-22.4l32-24c4.8-3.6 11.3-4.2 16.8-1.5S288 202 288 208"})
);

export default LanRepeat1;
