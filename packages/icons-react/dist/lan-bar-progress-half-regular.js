import React from 'react';

export const LanBarProgressHalfRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M448 144c8.8 0 16 7.2 16 16v192c0 8.8-7.2 16-16 16H272V144zm-246.1 0H224v70.1L70.1 368H64c-8.8 0-16-7.2-16-16v-54.1zm-67.9 0-86 86v-70c0-8.8 7.2-16 16-16zm3.9 224 86.1-86.1V368zM64 96c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64z"})
);

export default LanBarProgressHalfRegular;
