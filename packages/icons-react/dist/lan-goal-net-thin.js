import React from 'react';

export const LanGoalNetThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M504 32c39.8 0 72 32.2 72 72v368c0 4.4-3.6 8-8 8s-8-3.6-8-8V104c0-30.9-25.1-56-56-56H72c-30.9 0-56 25.1-56 56v368c0 4.4-3.6 8-8 8s-8-3.6-8-8V104c0-39.8 32.2-72 72-72zm-88 64c4.4 0 8 3.6 8 8v80h80c4.4 0 8 3.6 8 8s-3.6 8-8 8h-80v80h80c4.4 0 8 3.6 8 8s-3.6 8-8 8h-80v80h80c4.4 0 8 3.6 8 8s-3.6 8-8 8h-80v80c0 4.4-3.6 8-8 8s-8-3.6-8-8v-80H296v80c0 4.4-3.6 8-8 8s-8-3.6-8-8v-80H168v80c0 4.4-3.6 8-8 8s-8-3.6-8-8v-80H72c-4.4 0-8-3.6-8-8 0-3.9 2.7-7.1 6.4-7.8l1.6-.2h80v-80H72c-4.4 0-8-3.6-8-8s3.6-8 8-8h80v-80H72c-4.4 0-8-3.6-8-8s3.6-8 8-8h80v-80l.2-1.6c.8-3.6 4-6.4 7.8-6.4s7.1 2.7 7.8 6.4l.2 1.6v80h112v-80c0-4.4 3.6-8 8-8s8 3.6 8 8v80h112v-80c0-4.4 3.6-8 8-8M168 376h112v-80H168zm128 0h112v-80H296zm-128-96h112v-80H168zm128 0h112v-80H296z"})
);

export default LanGoalNetThin;
