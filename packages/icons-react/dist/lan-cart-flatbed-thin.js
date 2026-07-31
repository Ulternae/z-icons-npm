import React from 'react';

export const LanCartFlatbedThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8h48c13.3 0 24 10.7 24 24v336c0 30.9 25.1 56 56 56h20.2c-7.6 8.5-12.2 19.7-12.2 32 0 26.5 21.5 48 48 48s48-21.5 48-48c0-12.3-4.6-23.5-12.2-32h216.4c-7.6 8.5-12.2 19.7-12.2 32 0 26.5 21.5 48 48 48s48-21.5 48-48c0-12.3-4.6-23.5-12.2-32H568c4.4 0 8-3.6 8-8s-3.6-8-8-8H136c-22.1 0-40-17.9-40-40V40C96 17.9 78.1 0 56 0zm504 464a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-320 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64m8-384h272c13.3 0 24 10.7 24 24v176c0 13.3-10.7 24-24 24H200c-13.3 0-24-10.7-24-24V136c0-13.3 10.7-24 24-24m-40 24v176c0 22.1 17.9 40 40 40h272c22.1 0 40-17.9 40-40V136c0-22.1-17.9-40-40-40H200c-22.1 0-40 17.9-40 40"})
);

export default LanCartFlatbedThin;
