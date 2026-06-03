import React from 'react';

export const LanRepeat1Alt = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -15.95 512 543.9',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M475.3 84.7c6.2 6.2 6.2 16.4 0 22.6l-96 96c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l68.7-68.7H192c-88.4 0-160 71.6-160 160 0 8.8-7.2 16-16 16s-16-7.2-16-16C0 166 86 80 192 80h233.4l-68.7-68.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0zM36.7 427.3c-6.2-6.2-6.2-16.4 0-22.6l96-96c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L86.6 400H320c88.4 0 160-71.6 160-160 0-8.8 7.2-16 16-16s16 7.2 16 16c0 106-86 192-192 192H86.6l68.7 68.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0zM288 208v96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64l-6.4 4.8c-7.1 5.3-17.1 3.9-22.4-3.2s-3.9-17.1 3.2-22.4l32-24c4.8-3.6 11.3-4.2 16.8-1.5S288 202 288 208"})
);

export default LanRepeat1Alt;
