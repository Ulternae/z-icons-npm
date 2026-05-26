import React from 'react';

export const LanSprayCanRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192 0c-17.7 0-32 14.3-32 32v80h128V32c0-17.7-14.3-32-32-32zm96 208c26.5 0 48 21.5 48 48v184c0 13.3-10.7 24-24 24H136c-13.3 0-24-10.7-24-24V256c0-26.5 21.5-48 48-48zm-128-48c-53 0-96 43-96 96v184c0 39.8 32.2 72 72 72h176c39.8 0 72-32.2 72-72V256c0-53-43-96-96-96zm128 176a64 64 0 1 0-128 0 64 64 0 1 0 128 0m96-272a32 32 0 1 0-64 0 32 32 0 1 0 64 0m64 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64m128-32a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-32 128a32 32 0 1 0 0-64 32 32 0 1 0 0 64m32 64a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-128-64a32 32 0 1 0 0-64 32 32 0 1 0 0 64"})
);

export default LanSprayCanRegular;
