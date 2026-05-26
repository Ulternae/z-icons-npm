import React from 'react';

export const LanPoundSignRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M173.5 32C74.7 32 8.9 134 49.5 224l7.2 16H23.9c-13.3 0-24 10.7-24 24s10.7 24 24 24H70c1.5 23.4-3.8 47.1-15.9 68L3.2 444c-4.3 7.4-4.3 16.6 0 24s12.2 12 20.8 12h272c13.3 0 24-10.7 24-24s-10.7-24-24-24H65.6l30.1-52c16.4-28.3 23.9-60.3 22.4-92H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H108.8c-1.6-4.5-3.4-8.9-5.3-13.3l-10.2-22.5C67 146 109.6 80 173.5 80h6.9c14.4 0 28.7 3.4 41.6 9.8l39.3 19.6c11.9 5.9 26.3 1.1 32.2-10.7s1.1-26.3-10.7-32.2l-39.4-19.6c-19.5-9.8-41.1-14.9-63-14.9z"})
);

export default LanPoundSignRegular;
