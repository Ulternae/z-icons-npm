import React from 'react';

export const LanAlienRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M224 512c-10.5 0-20.7-2.9-29.3-8.8C148.8 471.7 0 359.3 0 224 0 100.3 100.3 0 224 0s224 100.3 224 224c0 135.3-148.8 247.7-194.7 279.2-8.6 5.9-18.9 8.8-29.3 8.8M48 224c0 50.4 28.2 101.3 68.2 146.9 39.2 44.7 84.2 78.1 105.6 92.7 1.3.7 3.1.7 4.4 0 21.4-14.6 66.4-48 105.6-92.7 40-45.6 68.2-96.5 68.2-146.9 0-97.2-78.8-176-176-176S48 126.8 48 224m160 82.3c0 7.6-6.1 13.7-13.7 13.7h-32c-45.4 0-82.3-36.8-82.3-82.3 0-7.6 6.1-13.7 13.7-13.7h32c45.4 0 82.3 36.8 82.3 82.3m32 0c0-45.4 36.8-82.3 82.3-82.3h32c7.6 0 13.7 6.1 13.7 13.7 0 45.4-36.8 82.3-82.3 82.3h-32c-7.6 0-13.7-6.1-13.7-13.7"})
);

export default LanAlienRegular;
