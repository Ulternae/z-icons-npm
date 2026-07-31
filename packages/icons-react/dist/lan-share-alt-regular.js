import React from 'react';

export const LanShareAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M432 96a48 48 0 1 0-96 0 48 48 0 1 0 96 0m48 0c0 53-43 96-96 96-27.4 0-52.1-11.5-69.6-29.9l-125.5 69.7c2 7.7 3.1 15.8 3.1 24.2s-1.1 16.5-3.1 24.2l125.5 69.7c17.5-18.4 42.2-29.9 69.6-29.9 53 0 96 43 96 96s-43 96-96 96-96-43-96-96c0-8.3 1.1-16.5 3.1-24.2l-125.5-69.7C148.1 340.5 123.4 352 96 352c-53 0-96-43-96-96s43-96 96-96c27.4 0 52.1 11.5 69.6 29.9l125.5-69.7c-2-7.7-3.1-15.8-3.1-24.2 0-53 43-96 96-96s96 43 96 96M144 256a48 48 0 1 0-96 0 48 48 0 1 0 96 0m240 208a48 48 0 1 0 0-96 48 48 0 1 0 0 96"})
);

export default LanShareAltRegular;
