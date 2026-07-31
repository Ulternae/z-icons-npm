import React from 'react';

export const LanCircleIndianRupeeThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-88-384c-4.4 0-8 3.6-8 8s3.6 8 8 8h60c31.8 0 57.8 24.7 59.9 56H168c-4.4 0-8 3.6-8 8s3.6 8 8 8h118.8c-5.6 27.4-29.8 48-58.8 48h-60c-3.5 0-6.5 2.2-7.6 5.5s.1 6.9 2.9 8.9l144 104c3.6 2.6 8.6 1.8 11.2-1.8s1.8-8.6-1.8-11.2l-124-89.4H228c37.9 0 69.3-27.7 75.1-64H344c4.4 0 8-3.6 8-8s-3.6-8-8-8h-40.1c-1.2-22.8-12.4-42.9-29.2-56H344c4.4 0 8-3.6 8-8s-3.6-8-8-8z"})
);

export default LanCircleIndianRupeeThin;
