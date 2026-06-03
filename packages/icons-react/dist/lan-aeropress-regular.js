import React from 'react';

export const LanAeropressRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -16 384 528',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M272 144c26.5 0 48 21.5 48 48v208h40c13.3 0 24 10.7 24 24s-10.7 24-24 24h-40v16c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48v-16H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h40V192c0-26.5 21.5-48 48-48zM112 400h160V192H112zm104-40a24 24 0 1 1 0-48 24 24 0 1 1 0 48m0-80a24 24 0 1 1 0-48 24 24 0 1 1 0 48m96-296c13.3 0 24 10.7 24 24s-10.7 24-24 24h-24v64h-48V32h-96v64H96V32H72C58.7 32 48 21.3 48 8s10.7-24 24-24z"})
);

export default LanAeropressRegular;
