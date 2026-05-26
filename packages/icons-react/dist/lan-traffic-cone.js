import React from 'react';

export const LanTrafficCone = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 32c3.2 0 6.1 1.9 7.4 4.9L328 192H184l64.6-155.1c1.2-3 4.2-4.9 7.4-4.9m85.3 192 40 96H130.6l40-96zm53.3 128 53.3 128h-384l53.3-128h277.3zM219.1 24.6 29.3 480H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h480c8.8 0 16-7.2 16-16s-7.2-16-16-16h-13.3L293 24.6C286.7 9.7 272.1 0 256 0s-30.7 9.7-36.9 24.6"})
);

export default LanTrafficCone;
