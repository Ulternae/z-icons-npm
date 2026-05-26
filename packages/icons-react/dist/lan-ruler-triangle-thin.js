import React from 'react';

export const LanRulerTriangleThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M75.3 20.7 117.7 63 98.3 82.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l19.3-19.3 68.7 68.7-35.3 35.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l35.3-35.3 68.7 68.7-19.3 19.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l19.3-19.3 68.7 68.7-35.3 35.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l35.3-35.3 68.7 68.7-19.3 19.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l19.3-19.3 42.3 42.3c4.6 4.6 5.9 11.5 3.5 17.4s-8.2 10-14.7 10H64c-8.8 0-16-7.2-16-16V32c0-6.5 3.9-12.3 9.9-14.8s12.9-1.1 17.4 3.5M86.6 9.4C77.5.2 63.7-2.5 51.8 2.4S32 19.1 32 32v416c0 17.7 14.3 32 32 32h416c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9zm71 229.4c-2.3-2.3-5.7-3-8.7-1.7s-4.9 4.2-4.9 7.4V360c0 4.4 3.6 8 8 8h115.5c3.2 0 6.2-1.9 7.4-4.9s.6-6.4-1.7-8.7L157.7 238.8zM160 352v-88.2l88.2 88.2z"})
);

export default LanRulerTriangleThin;
