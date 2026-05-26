import React from 'react';

export const LanTvRetro = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M171.3 4.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L217.4 96H64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H294.6l68.7-68.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L256 89.4zM256 128h192c17.7 0 32 14.3 32 32v256c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32zm184 104a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-24 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48M304 192c8.8 0 16 7.2 16 16v160c0 8.8-7.2 16-16 16H112c-8.8 0-16-7.2-16-16V208c0-8.8 7.2-16 16-16zm-192-32c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48V208c0-26.5-21.5-48-48-48z"})
);

export default LanTvRetro;
