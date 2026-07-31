import React from 'react';

export const LanCircleEurozoneSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512M136 144h72c13.3 0 24 10.7 24 24s-10.7 24-24 24h-48v43.2h40c13.3 0 24 10.7 24 24s-10.7 24-24 24h-40V320h49.6c13.3 0 24 10.7 24 24s-10.7 24-24 24H136c-13.3 0-24-10.7-24-24V168c0-13.3 10.7-24 24-24m152 0h88c8.3 0 16 4.3 20.4 11.4s4.8 15.9 1 23.4L326.8 320H376c13.3 0 24 10.7 24 24s-10.7 24-24 24h-88c-8.3 0-16-4.3-20.4-11.4s-4.8-15.9-1-23.4L337.2 192H288c-13.3 0-24-10.7-24-24s10.7-24 24-24"})
);

export default LanCircleEurozoneSolid;
