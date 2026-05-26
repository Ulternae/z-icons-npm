import React from 'react';

export const LanDiamondExclamation = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 0c15.4 0 30.1 6.1 41 17l198 198c10.9 10.9 17 25.6 17 41s-6.1 30.1-17 41L297 495c-10.9 10.9-25.6 17-41 17s-30.1-6.1-41-17L17 297C6.1 286.1 0 271.4 0 256s6.1-30.1 17-41L215 17c10.9-10.9 25.6-17 41-17m0 32c-6.9 0-13.5 2.7-18.3 7.6L39.6 237.7c-4.9 4.8-7.6 11.4-7.6 18.3s2.7 13.5 7.6 18.3l198.1 198.1c4.9 4.9 11.5 7.6 18.3 7.6s13.5-2.7 18.3-7.6l198.1-198.1c4.9-4.9 7.6-11.5 7.6-18.3s-2.7-13.5-7.6-18.3L274.3 39.6c-4.8-4.9-11.4-7.6-18.3-7.6m0 352a24 24 0 1 1 0-48 24 24 0 1 1 0 48m0-256c13.5 0 24.3 11.4 23.5 24.9l-7.6 136c-.5 8.5-7.5 15.1-16 15.1s-15.5-6.6-16-15.1l-7.6-136c-.8-13.5 10-24.9 23.5-24.9z"})
);

export default LanDiamondExclamation;
