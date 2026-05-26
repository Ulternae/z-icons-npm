import React from 'react';

export const LanEyeDropperHalfSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M240.1 130.8 341.6 29.2c39-39 102.2-39 141.1 0s39 102.2 0 141.1L381.1 271.9l9.4 9.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l9.4 9.4zm-75.2 83.1 45.3 45.3-60.8 60.8h85.5l18.1-18.1 18.1 18.1h1.1l-.6.6 26.6 26.6-109.4 109.4c-15 15-35.4 23.4-56.6 23.4H89.8l-39.9 26.6c-12.7 8.5-29.6 6.8-40.4-4s-12.5-27.7-4-40.4l26.6-39.9v-42.4c0-21.2 8.4-41.6 23.4-56.6l109.3-109.4z"})
);

export default LanEyeDropperHalfSolid;
