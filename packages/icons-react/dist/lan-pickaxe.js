import React from 'react';

export const LanPickaxe = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M544 224c0 36-8.5 70-23.5 100.1C465.3 187.6 356.4 78.7 219.9 23.5 250 8.5 284 0 320 0c123.7 0 224 100.3 224 224m-41.9 142.7c4 12.1 19.5 15.6 26.9 5.2 29.6-41.8 47-92.8 47-147.9 0-64.9-24.2-124.2-64-169.4l27.3-27.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L489.4 32C444.3-7.8 385-32 320-32c-55.1 0-106.2 17.4-147.9 47-10.4 7.3-6.8 22.9 5.2 26.9 71.3 23.7 135.7 62.6 189.2 112.9L36.7 484.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l329.9-329.9c50.3 53.5 89.2 117.9 112.9 189.2z"})
);

export default LanPickaxe;
