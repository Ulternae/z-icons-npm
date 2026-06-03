import React from 'react';

export const LanMessagesQuestionSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 576 576',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M384 40c0-39.8-32.2-72-72-72H72C32.2-32 0 .2 0 40v192c0 39.8 32.2 72 72 72h24v64c0 8.8 7.2 16 16 16h1.8c4 0 7.8-1.5 10.8-4.2L208 304h104c39.8 0 72-32.2 72-72zM192 383.4v8.6c0 39.8 32.2 72 72 72h104l83.4 75.8c2.9 2.7 6.8 4.2 10.8 4.2h1.8c8.8 0 16-7.2 16-16v-64h24c39.8 0 72-32.2 72-72V200c0-39.8-32.2-72-72-72h-72v104c0 66.3-53.7 120-120 120h-85.4zM192 76c-11.5 0-21.3 7.4-24.8 17.8-3.5 10.5-14.8 16.1-25.3 12.6s-16.1-14.8-12.6-25.3c8.8-26.2 33.5-45.2 62.7-45.2 36.5 0 66.1 29.6 66.1 66.1 0 39.2-30 55.7-46.5 61.6-1.8 9.3-9.9 16.2-19.6 16.2-11 0-20-9-20-20 0-17.1 12.4-29.3 25-33.5 5.3-1.8 10.8-4.5 14.8-8.5 3.5-3.4 6.3-8.1 6.3-15.9 0-14.4-11.7-26.1-26.1-26.1zm-24 148a24 24 0 1 1 48 0 24 24 0 1 1-48 0"})
);

export default LanMessagesQuestionSolid;
