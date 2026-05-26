import React from 'react';

export const LanCirclePolishZlotySolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m95.4-360v77.4l10.6-4.2c8.2-3.3 17.5.7 20.8 8.9s-.7 17.5-8.9 20.8l-22.5 9V360c0 13.3-10.7 24-24 24s-24-10.7-24-24v-76.9l-9.5 3.8c-8.2 3.3-17.5-.7-20.8-8.9s.7-17.5 8.9-20.8l21.4-8.6V152c0-13.3 10.7-24 24-24s24 10.7 24 24M128 216c0-13.3 10.7-24 24-24h96c8.7 0 16.7 4.7 20.9 12.3s4.1 16.8-.5 24.3L202.8 336H248c13.3 0 24 10.7 24 24s-10.7 24-24 24h-88c-8.7 0-16.7-4.7-20.9-12.3s-4.1-16.8.5-24.3L205.2 240H152c-13.3 0-24-10.7-24-24"})
);

export default LanCirclePolishZlotySolid;
