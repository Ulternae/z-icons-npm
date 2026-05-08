import React from 'react';

export const MinaQuestionOctagon = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M7.805 3.469C8.16 3.115 8.451 3 8.937 3h6.126c.486 0 .778.115 1.132.469l4.336 4.336c.354.354.469.646.469 1.132v6.126c0 .5-.125.788-.469 1.132l-4.336 4.336c-.354.354-.646.469-1.132.469H8.937c-.5 0-.788-.125-1.132-.469L3.47 16.195c-.355-.355-.47-.646-.47-1.132V8.937c0-.5.125-.788.469-1.132z"}), React.createElement('path', {"d":"M12 13.496c0-2.003 2-1.503 2-3.506 0-2.659-4-2.659-4 0m2 6.007v-.5"})
);

export default MinaQuestionOctagon;
