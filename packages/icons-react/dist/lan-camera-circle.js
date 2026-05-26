import React from 'react';

export const LanCameraCircle = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-55.4-389.9L184.9 144H168c-30.9 0-56 25.1-56 56v112c0 30.9 25.1 56 56 56h176c30.9 0 56-25.1 56-56V200c0-30.9-25.1-56-56-56h-16.9l-15.7-21.9c-4.5-6.3-11.8-10.1-19.5-10.1h-71.8c-7.8 0-15 3.7-19.5 10.1m23.6 21.9h63.5l18.1 25.3c3 4.2 7.9 6.7 13 6.7h25.1c13.3 0 24 10.7 24 24v112c0 13.3-10.7 24-24 24h-176c-13.3 0-24-10.7-24-24V200c0-13.3 10.7-24 24-24H193c5.2 0 10-2.5 13-6.7zm7.8 104a24 24 0 1 1 48 0 24 24 0 1 1-48 0m80 0a56 56 0 1 0-112 0 56 56 0 1 0 112 0"})
);

export default LanCameraCircle;
