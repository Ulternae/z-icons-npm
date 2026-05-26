import React from 'react';

export const LanPalletThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M8 336c-4.4 0-8 3.6-8 8s3.6 8 8 8h80v144H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h560c4.4 0 8-3.6 8-8s-3.6-8-8-8h-80V352h80c4.4 0 8-3.6 8-8s-3.6-8-8-8zm96 16h176v144H104zm192 0h176v144H296z"})
);

export default LanPalletThin;
