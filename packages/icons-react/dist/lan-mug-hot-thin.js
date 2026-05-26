import React from 'react';

export const LanMugHotThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M152 0c4.4 0 8 3.6 8 8 0 23.9 16.8 39.5 37.4 58.1l1 .9c19.2 17.3 41.6 37.5 41.6 69 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-23.9-16.8-39.5-37.4-58.1l-1-.9C166.4 59.7 144 39.5 144 8c0-4.4 3.6-8 8-8M96 208c-8.8 0-16 7.2-16 16v192c0 44.2 35.8 80 80 80h192c44.2 0 80-35.8 80-80V208zm352 0v176h24c48.6 0 88-39.4 88-88s-39.4-88-88-88zm0 192v16c0 53-43 96-96 96H160c-53 0-96-43-96-96V224c0-17.7 14.3-32 32-32h376c57.4 0 104 46.6 104 104s-46.6 104-104 104zM272 8c0 23.9 16.8 39.5 37.4 58.1l1 .9c19.2 17.3 41.6 37.5 41.6 69 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-23.9-16.8-39.5-37.4-58.1l-1-.9C278.4 59.7 256 39.5 256 8c0-4.4 3.6-8 8-8s8 3.6 8 8"})
);

export default LanMugHotThin;
