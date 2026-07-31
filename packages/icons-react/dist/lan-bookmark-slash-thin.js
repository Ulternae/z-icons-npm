import React from 'react';

export const LanBookmarkSlashThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32.125 576.025 575.95',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M13.7-29.8c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l560 560c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L480 436.6V56c0-30.9-25.1-56-56-56H152c-29.8 0-54.2 23.3-55.9 52.7zM112 68.6V56c0-22.1 17.9-40 40-40h272c22.1 0 40 17.9 40 40v364.6zm0 429.7V159.2l-16-16v355.1c0 12.3 13.2 20 23.9 13.9l164.2-92.8c2.4-1.4 5.4-1.4 7.9 0l164.2 92.8c3.5 2 7.2 2.5 10.7 1.8l-32.5-32.5-134.5-76c-7.3-4.1-16.3-4.1-23.6 0z"})
);

export default LanBookmarkSlashThin;
