import React from 'react';

export const CoreClockRegularDuo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 256a192 192 0 1 0 384 0 192 192 0 1 0-384 0m164-140h56v112h96v56H256c-15.5 0-28-12.5-28-28z","opacity":".4"}), React.createElement("path", {"fill":"currentColor","d":"M448 256a192 192 0 1 0-384 0 192 192 0 1 0 384 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m284-112v84h96v56H256c-15.5 0-28-12.5-28-28V116h56z"})
);

export default CoreClockRegularDuo;
