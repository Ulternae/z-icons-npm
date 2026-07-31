import React from 'react';

export const LanSortShapesDownAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m233 385-88 88c-9.4 9.4-24.6 9.4-33.9 0L23 385c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47V56c0-13.3 10.7-24 24-24s24 10.7 24 24v342.1l47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zm263 70c0 13.8-11.2 25.1-25.1 25.1H297c-13.8 0-25.1-11.2-25.1-25.1 0-4.5 1.2-9 3.6-12.9l84.2-140.3c5.1-8.5 14.3-13.7 24.2-13.7s19.1 5.2 24.2 13.7L492.4 442c2.3 3.9 3.6 8.4 3.6 12.9zM336 80v96h96V80zm94.4 352L384 354.6 337.6 432zM288 80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48z"})
);

export default LanSortShapesDownAltRegular;
