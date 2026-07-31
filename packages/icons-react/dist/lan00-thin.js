import React from 'react';

export const Lan00Thin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M112 32C50.1 32 0 82.1 0 144v224c0 61.9 50.1 112 112 112s112-50.1 112-112V144c0-61.9-50.1-112-112-112M16 144c0-53 43-96 96-96s96 43 96 96v224c0 53-43 96-96 96s-96-43-96-96zM400 32c-61.9 0-112 50.1-112 112v224c0 61.9 50.1 112 112 112s112-50.1 112-112V144c0-61.9-50.1-112-112-112m-96 112c0-53 43-96 96-96s96 43 96 96v224c0 53-43 96-96 96s-96-43-96-96z"})
);

export default Lan00Thin;
