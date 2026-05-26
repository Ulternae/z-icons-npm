import React from 'react';

export const LanBarProgressFullRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M208 96h240c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H305.9l-1 1-1-1h-240c-35.3 0-64-28.7-64-64L0 160c0-35.3 28.7-64 64-64h142.1l1-1 1 1zm-49.9 48H64c-8.8 0-16 7.2-16 16v94.1zM48 321.9V352c0 8.8 7.2 16 16 16h46.1l224-224H226L48.1 321.9zM401.9 144l-224 224H286l177.9-177.9V160c0-8.8-7.2-16-16-16h-46.1zM464 257.9 353.9 368H448c8.8 0 16-7.2 16-16z"})
);

export default LanBarProgressFullRegular;
