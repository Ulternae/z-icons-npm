import React from 'react';

export const LanPresentationScreenRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M24 32C10.7 32 0 42.7 0 56s10.7 24 24 24h8v240c0 35.3 28.7 64 64 64h136v35.5l-69.8 48.8c-10.9 7.6-13.5 22.6-5.9 33.4s22.6 13.5 33.4 5.9l66.2-46.4 66.2 46.4c10.9 7.6 25.8 5 33.4-5.9s5-25.8-5.9-33.4l-69.8-48.8V384h136c35.3 0 64-28.7 64-64V80h8c13.3 0 24-10.7 24-24s-10.7-24-24-24zm408 48v240c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V80z"})
);

export default LanPresentationScreenRegular;
