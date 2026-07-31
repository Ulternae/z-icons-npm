import React from 'react';

export const LanCircleExclamationRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m0-464a208 208 0 1 0 0 416 208 208 0 1 0 0-416m0 336a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0-256c18.2 0 32.7 15.5 31.4 33.7l-7.4 104c-.9 12.6-11.4 22.3-23.9 22.3-12.6 0-23-9.7-23.9-22.3l-7.4-104c-1.5-18.2 13-33.7 31.2-33.7"})
);

export default LanCircleExclamationRegular;
