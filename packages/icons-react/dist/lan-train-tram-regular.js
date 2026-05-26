import React from 'react';

export const LanTrainTramRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 8C0-5.3 10.7-16 24-16h336c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8H216v64h40c53 0 96 43 96 96v160c0 31.2-14.9 59-38 76.5l64.3 76c8.6 10.1 7.3 25.3-2.8 33.8s-25.3 7.3-33.8-2.8l-74.6-88.1q-5.4.6-11.1.6H128q-5.7 0-11.1-.6l-74.6 88.1c-8.6 10.1-23.7 11.4-33.8 2.8s-11.4-23.7-2.8-33.8l64.3-76C46.9 411 32 383.2 32 352V192c0-53 43-96 96-96h40V32H48v8c0 13.3-10.7 24-24 24S0 53.3 0 40zm128 136c-26.5 0-48 21.5-48 48v48h224v-48c0-26.5-21.5-48-48-48zM80 288v64c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48v-64zm32 56a24 24 0 1 1 48 0 24 24 0 1 1-48 0m136-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"})
);

export default LanTrainTramRegular;
