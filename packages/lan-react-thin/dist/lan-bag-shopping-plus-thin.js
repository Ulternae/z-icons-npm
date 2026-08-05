import React from 'react';

export function LanBagShoppingPlusThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 448 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M144 64v64h160V64c0-44.2-35.8-80-80-80s-80 35.8-80 80m176 80H48c-17.7 0-32 14.3-32 32v208c0 44.2 35.8 80 80 80h256c44.2 0 80-35.8 80-80V176c0-17.7-14.3-32-32-32zm-192-16V64c0-53 43-96 96-96s96 43 96 96v64h80c26.5 0 48 21.5 48 48v208c0 53-43 96-96 96H96c-53 0-96-43-96-96V176c0-26.5 21.5-48 48-48zm96 96c4.4 0 8 3.6 8 8v64h64c4.4 0 8 3.6 8 8s-3.6 8-8 8h-64v64c0 4.4-3.6 8-8 8s-8-3.6-8-8v-64h-64c-4.4 0-8-3.6-8-8s3.6-8 8-8h64v-64c0-4.4 3.6-8 8-8"})
  );
}

export default LanBagShoppingPlusThin;
