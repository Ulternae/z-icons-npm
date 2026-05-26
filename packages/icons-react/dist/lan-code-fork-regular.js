import React from 'react';

export const LanCodeForkRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M80 112a32 32 0 1 0 0-64 32 32 0 1 0 0 64m80-32c0 35.8-23.5 66.1-56 76.3V184c0 30.9 25.1 56 56 56h128c30.9 0 56-25.1 56-56v-27.7c-32.5-10.2-56-40.5-56-76.3 0-44.2 35.8-80 80-80s80 35.8 80 80c0 35.8-23.5 66.1-56 76.3V184c0 57.4-46.6 104-104 104h-40v67.7c32.5 10.2 56 40.5 56 76.3 0 44.2-35.8 80-80 80s-80-35.8-80-80c0-35.8 23.5-66.1 56-76.3V288h-40c-57.4 0-104-46.6-104-104v-27.7C23.5 146.1 0 115.8 0 80 0 35.8 35.8 0 80 0s80 35.8 80 80m208 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64M256 432a32 32 0 1 0-64 0 32 32 0 1 0 64 0"})
);

export default LanCodeForkRegular;
