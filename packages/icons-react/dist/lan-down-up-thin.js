import React from 'react';

export const LanDownUpThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M384 512c4.4 0 8-3.6 8-8V160h91.7c15.6 0 28.3-12.7 28.3-28.3 0-7.5-3-14.7-8.3-20l-106-106C394 2 389.1 0 384 0s-10 2-13.7 5.7l-106 106c-5.3 5.3-8.3 12.5-8.3 20 0 15.6 12.7 28.3 28.3 28.3H376v344c0 4.4 3.6 8 8 8m99.7-368H284.3c-6.8 0-12.3-5.5-12.3-12.3 0-3.3 1.3-6.4 3.6-8.7L381.7 17c.6-.6 1.5-1 2.3-1s1.7.3 2.3 1l106.1 106c2.3 2.3 3.6 5.4 3.6 8.7 0 6.8-5.5 12.3-12.3 12.3M120 352H28.3C12.7 352 0 364.7 0 380.3c0 7.5 3 14.7 8.3 20l106 106c3.6 3.6 8.5 5.7 13.7 5.7s10-2 13.7-5.7l106-106c5.3-5.3 8.3-12.5 8.3-20 0-15.6-12.7-28.3-28.3-28.3H136V8c0-4.4-3.6-8-8-8s-8 3.6-8 8zm8 16h99.7c6.8 0 12.3 5.5 12.3 12.3 0 3.3-1.3 6.4-3.6 8.7L130.3 495c-.6.6-1.5 1-2.3 1s-1.7-.3-2.3-1L19.6 389c-2.3-2.3-3.6-5.4-3.6-8.7 0-6.8 5.5-12.3 12.3-12.3z"})
);

export default LanDownUpThin;
