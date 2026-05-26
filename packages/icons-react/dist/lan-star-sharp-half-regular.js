import React from 'react';

export const LanStarSharpHalfRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M251.5 25.9c11.7 1.8 20.3 11.9 20.3 23.7v332.8c0 7.4-3.4 14.4-9.3 18.9L126.7 506.9c-8.3 6.5-19.8 6.8-28.5.7s-12.3-16.9-9.1-27l51-159.9L9.3 218.9c-8.1-6.3-11.3-17-8-26.7S13.7 176 24 176h158.5L225 42.3c3.6-11.3 14.9-18.3 26.5-16.4m-27.6 178.3-1 3.1c-3.2 10-12.4 16.7-22.9 16.7H94l88.7 69.1c7.9 6.2 11.2 16.6 8.1 26.2l-32.5 102.3 65.5-51V204.2z"})
);

export default LanStarSharpHalfRegular;
