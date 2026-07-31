import React from 'react';

export const LanEarRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M336 192c0 48.1-23.6 90.8-60 117-16.8 12.1-34.4 29.8-44.3 54.5l-20.1 50.2C199.4 444.1 170 464 137.3 464H128c-44.2 0-80-35.8-80-80V192c0-79.5 64.5-144 144-144s144 64.5 144 144m-59.7 189.4c5.5-13.7 15.8-24.8 27.8-33.4 48.4-34.9 80-91.7 80-156 0-106-86-192-192-192S0 86 0 192v192c0 70.7 57.3 128 128 128h9.3c52.3 0 99.4-31.9 118.8-80.5l20.1-50.2zM128 192c0-35.3 28.7-64 64-64s64 28.7 64 64v8c0 13.3 10.7 24 24 24s24-10.7 24-24v-8c0-61.9-50.1-112-112-112S80 130.1 80 192v40c0 13.3 10.7 24 24 24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24h-16c-13.3 0-24 10.7-24 24s10.7 24 24 24h16c39.8 0 72-32.2 72-72 0-37.1-28-67.6-64-71.6z"})
);

export default LanEarRegular;
