import React from 'react';

export const LanArrowProgress = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M251.3 36.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L249.4 80H96c-53 0-96 43-96 96s43 96 96 96h320c35.3 0 64 28.7 64 64 0 25.3-14.7 47.2-36 57.6-9.1-24.3-32.5-41.6-60-41.6-35.3 0-64 28.7-64 64s28.7 64 64 64c31.6 0 57.9-23 63.1-53.1C484.9 414 512 378.2 512 336c0-53-43-96-96-96H96c-35.3 0-64-28.7-64-64s28.7-64 64-64h153.4l-20.7 20.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l48-48c6.2-6.2 6.2-16.4 0-22.6zM384 96a32 32 0 1 1 64 0 32 32 0 1 1-64 0m96 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0M96 384a32 32 0 1 1 0 64 32 32 0 1 1 0-64m62 16c-7.1-27.6-32.2-48-62-48-35.3 0-64 28.7-64 64s28.7 64 64 64c29.8 0 54.9-20.4 62-48h59.4l-20.7 20.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l48-48c6.2-6.2 6.2-16.4 0-22.6l-48-48c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l20.7 20.7zm226-16a32 32 0 1 1 0 64 32 32 0 1 1 0-64"})
);

export default LanArrowProgress;
