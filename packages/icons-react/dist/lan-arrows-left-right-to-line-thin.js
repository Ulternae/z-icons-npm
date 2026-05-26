import React from 'react';

export const LanArrowsLeftRightToLineThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M16 104v304c0 4.4-3.6 8-8 8s-8-3.6-8-8V104c0-4.4 3.6-8 8-8s8 3.6 8 8m560 0v304c0 4.4-3.6 8-8 8s-8-3.6-8-8V104c0-4.4 3.6-8 8-8s8 3.6 8 8m-82.3 157.7-88 88c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l74.3-74.3H107.3l74.3 74.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-88-88c-3.1-3.1-3.1-8.2 0-11.3l88-88c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L107.3 248h361.4l-74.3-74.3c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l88 88c3.1 3.1 3.1 8.2 0 11.3"})
);

export default LanArrowsLeftRightToLineThin;
