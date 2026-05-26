import React from 'react';

export const LanChildDressThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M160 112a48 48 0 1 0 0-96 48 48 0 1 0 0 96m0-112a64 64 0 1 1 0 128 64 64 0 1 1 0-128m-52.6 248.8c4 1.9 5.7 6.6 3.8 10.6L52.6 384h214.8l-58.6-124.6c-1.9-4-.2-8.8 3.8-10.6s8.8-.2 10.6 3.8l64 136c1.2 2.5 1 5.4-.5 7.7s-4 3.7-6.8 3.7h-40v80c0 17.7-14.3 32-32 32s-32-14.3-32-32v-80h-32v80c0 17.7-14.3 32-32 32s-32-14.3-32-32v-80h-40c-2.7 0-5.3-1.4-6.8-3.7s-1.7-5.2-.5-7.7l64-136c1.9-4 6.6-5.7 10.6-3.8zM96 400v80c0 8.8 7.2 16 16 16s16-7.2 16-16v-80zm96 80c0 8.8 7.2 16 16 16s16-7.2 16-16v-80h-32zM90.3 215.4 30.9 316.1c-2.2 3.8-7.1 5.1-11 2.8s-5.1-7.1-2.8-11l59.4-100.7C93.8 178 125.2 160 159.2 160h1.6c34 0 65.4 18 82.7 47.2l59.4 100.7c2.2 3.8 1 8.7-2.8 11s-8.7 1-11-2.8l-59.4-100.7C215.3 191 189.1 176 160.8 176h-1.6c-28.3 0-54.5 15-68.9 39.4"})
);

export default LanChildDressThin;
