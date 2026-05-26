import React from 'react';

export const LanSemicolonRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 192 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M72 128a24 24 0 1 1 48 0 24 24 0 1 1-48 0m96 0a72 72 0 1 0-144 0 72 72 0 1 0 144 0M84.5 347c1.4-6.4 7.1-11 13.6-11 7.3 0 13.9 6.2 13.9 14.3 0 2.7-.8 5.4-2.1 7.6l-42.8 70 17.3-81zm-.7 145.8L150.9 383c6-9.8 9.2-21.2 9.2-32.7 0-34.2-27.7-62.3-61.9-62.3-29.2 0-54.4 20.4-60.6 49L10.4 463.6C5.1 488.5 24.1 512 49.6 512c14 0 26.9-7.3 34.2-19.2"})
);

export default LanSemicolonRegular;
