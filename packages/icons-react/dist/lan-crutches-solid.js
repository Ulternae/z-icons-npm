import React from 'react';

export const LanCrutchesSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M406.6 9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l1.4 1.4-158.6 158.6c-18 18-28.1 42.4-28.1 67.9v59c0 8.5-3.4 16.6-9.4 22.6l-77.3 77.3-16 16c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l93.3-93.3c6-6 14.1-9.4 22.6-9.4h59c25.5 0 49.9-10.1 67.9-28.1L520 213.4l1.4 1.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zM474.7 168 392 250.7 325.3 184l82.7-82.7zm-225.3 91.9 30.6-30.6 66.7 66.7-30.6 30.6c-6 6-14.1 9.4-22.6 9.4H240v-53.5c0-8.5 3.4-16.6 9.4-22.6M213.3 56l1.4-1.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l1.4-1.4 72 72v-2.7c0-24.6 6.3-48.6 18-69.7L101.3 168l66.7-66.7 40.8 40.8 45.3-45.3zm228.1 430.6 16 16c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-16-16-63.4-63.4-27.9 27.9q-8.85 8.85-18.9 15.9z"})
);

export default LanCrutchesSolid;
