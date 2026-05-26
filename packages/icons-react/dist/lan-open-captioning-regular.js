import React from 'react';

export const LanOpenCaptioningRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448 112c8.8 0 16 7.2 16 16v256c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V128c0-8.8 7.2-16 16-16zM64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm264 144h32c4.4 0 8 3.6 8 8 0 13.3 10.7 24 24 24s24-10.7 24-24c0-30.9-25.1-56-56-56h-32c-30.9 0-56 25.1-56 56v80c0 30.9 25.1 56 56 56h32c30.9 0 56-25.1 56-56 0-13.3-10.7-24-24-24s-24 10.7-24 24c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8v-80c0-4.4 3.6-8 8-8m-184 8c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v80c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8zm8-56c-30.9 0-56 25.1-56 56v80c0 30.9 25.1 56 56 56h32c30.9 0 56-25.1 56-56v-80c0-30.9-25.1-56-56-56z"})
);

export default LanOpenCaptioningRegular;
