import React from 'react';

export const LanQuoteLeftAltThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 216C0 149.7 53.7 96 120 96h16c4.4 0 8 3.6 8 8s-3.6 8-8 8h-16c-57.4 0-104 46.6-104 104v34.7C29.2 234.4 49.4 224 72 224h48c39.8 0 72 32.2 72 72v48c0 39.8-32.2 72-72 72H72c-39.8 0-72-32.2-72-72zm16 96v32c0 30.9 25.1 56 56 56h48c30.9 0 56-25.1 56-56v-48c0-30.9-25.1-56-56-56H72c-30.9 0-56 25.1-56 56zm240-96c0-66.3 53.7-120 120-120h16c4.4 0 8 3.6 8 8s-3.6 8-8 8h-16c-57.4 0-104 46.6-104 104v34.7c13.2-16.3 33.4-26.7 56-26.7h48c39.8 0 72 32.2 72 72v48c0 39.8-32.2 72-72 72h-48c-39.8 0-72-32.2-72-72zm16 96v32c0 30.9 25.1 56 56 56h48c30.9 0 56-25.1 56-56v-48c0-30.9-25.1-56-56-56h-48c-30.9 0-56 25.1-56 56z"})
);

export default LanQuoteLeftAltThin;
