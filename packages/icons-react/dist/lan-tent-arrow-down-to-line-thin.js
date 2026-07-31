import React from 'react';

export const LanTentArrowDownToLineThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M101.7 189.7c-3.1 3.1-8.2 3.1-11.3 0l-72-72c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0L88 164.7V8c0-4.4 3.6-8 8-8s8 3.6 8 8v156.7l58.3-58.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-72 72zM129.8 496 156 261c1.1-9.9 6.7-18.7 15.3-23.8L335.5 138c10.2-6.1 22.9-6.1 33.1 0l164.2 99.2-8.3 13.7-164.2-99.2-.3-.2v166.1L476.3 496h72.8c4.8 0 8.5-4.1 8-8.9l-25-224.3c-.6-4.9-3.4-9.4-7.6-11.9l8.3-13.7c8.5 5.1 14.2 14 15.3 23.8l25 224.3c1.6 14.2-9.5 26.7-23.9 26.7H8c-4.4 0-8-3.6-8-8s3.6-8 8-8zM360 346.9V496h97.2zM344 496V151.5l-.3.2-164.2 99.2c-4.3 2.6-7.1 7-7.6 11.9l-26 233.2z"})
);

export default LanTentArrowDownToLineThin;
