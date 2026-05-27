import React from 'react';

export const CoreLeafRegular-duo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96.1 264.6c0-39.7 15.3-76.1 40.6-103.2 12.6-13.6 27.7-24.8 44.6-33 8.4-4.1 17.3-7.5 26.6-10 4.6-1.2 9.4-2.3 14.2-3.1 2.4-.4 4.8-.7 7.2-1s4.9-.5 7.4-.7c58.1-4.1 116.2-8.3 174.3-12.4-4.1 58.1-8.3 116.2-12.4 174.3-5.7 79.2-71.6 140.6-151 140.6-30.2 0-58.4-8.9-82-24.1l145.2-145.2-45.3-45.3-145.2 145.1c-15-23.3-23.8-50.9-24.1-80.6v-1.5z","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M462.4 279.9c-6.5 90.5-68.2 164.7-150.9 190.4-20.3 6.3-41.8 9.7-64 9.7-47.9 0-92.2-15.7-128-42.1l-64.8 64.8-45.3-45.3 64.8-64.8c-26.5-35.8-42.1-80.1-42.1-128 0-113 87.3-206.8 200.1-214.9C374.3 39.5 457 33.6 480.1 32c-1.7 23.2-7.6 105.8-17.7 247.9m-342.1 66.7 145.2-145.2 45.3 45.3-145.2 145.2c23.6 15.3 51.8 24.1 82 24.1 79.4 0 145.4-61.4 151-140.6L411 101.1l-174.2 12.4c-79.2 5.7-140.6 71.6-140.6 151 0 30.2 8.9 58.4 24.1 82z"})
);

export default CoreLeafRegular-duo;
