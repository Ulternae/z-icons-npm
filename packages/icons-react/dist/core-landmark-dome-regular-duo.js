import React from 'react';

export const CoreLandmarkDomeRegularDuo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 512 544',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M65.6 192h380.8c-11.9-90.3-89.1-160-182.7-160h-15.5c-93.5 0-170.7 69.7-182.6 160","opacity":".4"}), React.createElement("path", {"fill":"currentColor","d":"M248.3-32C111.2-32 0 79.2 0 216.3c0 19.3 13.8 35.3 32 38.9V384h64V256h64v128h64V256h64v128h64V256h64v128h64V255.3c18.2-3.6 32-19.7 32-39C512 79.2 400.8-32 263.7-32h-15.5zm0 64h15.5c93.5 0 170.8 69.7 182.7 160H65.6c11.9-90.3 89.1-160 182.7-160M32 448H0v64h512v-64z"})
);

export default CoreLandmarkDomeRegularDuo;
