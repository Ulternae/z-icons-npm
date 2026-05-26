import React from 'react';

export const LanPersonLimbsWide = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M200 32a24 24 0 1 1 48 0 24 24 0 1 1-48 0m80 0a56 56 0 1 0-112 0 56 56 0 1 0 112 0M40.5 50.4c-7.5-4.7-17.4-2.4-22 5.1s-2.4 17.4 5.1 22l81.3 50.8c12.4 7.8 25.5 14.1 39.2 19.1v148.1c0 19.7-3.3 39.2-9.8 57.8-1.5 4.2-19.3 55.4-53.3 153.4-2.9 8.3 1.5 17.5 9.9 20.4s17.5-1.5 20.4-9.9l43-123.6c10.4-29.8 38.4-49.7 69.9-49.7s59.5 19.9 69.9 49.6v.1l43 123.6c2.9 8.3 12 12.8 20.4 9.9s12.8-12 9.9-20.4l-43-123.6v-.1l-10.3-29.7c-6.5-18.6-9.8-38.1-9.8-57.8V147.4c13.6-5 26.8-11.3 39.2-19.1l81.3-50.8c7.5-4.7 9.8-14.6 5.1-22s-14.6-9.8-22-5.1l-81.3 50.8c-28 17.5-60.3 26.8-93.3 26.8h-17.9c-33 0-65.3-9.3-93.3-26.8zM274 324.5c-15-8-32.1-12.5-50-12.5s-35 4.5-50 12.5c1.3-9.6 2-19.3 2-29V156.2c12.8 2.5 25.9 3.7 39.1 3.7H233c13.2 0 26.2-1.2 39.1-3.7v139.3c0 9.7.7 19.4 2 29z"})
);

export default LanPersonLimbsWide;
