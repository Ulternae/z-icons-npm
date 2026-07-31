import React from 'react';

export const LanH1Regular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M440 88c0-8.5-4.5-16.4-11.8-20.7s-16.4-4.4-23.8-.3l-72 40c-11.6 6.4-15.8 21-9.3 32.6s21 15.8 32.6 9.3l36.3-20.2v271.2h-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48v-312zM48 88c0-13.3-10.7-24-24-24S0 74.7 0 88v336c0 13.3 10.7 24 24 24s24-10.7 24-24V280h160v144c0 13.3 10.7 24 24 24s24-10.7 24-24V88c0-13.3-10.7-24-24-24s-24 10.7-24 24v144H48z"})
);

export default LanH1Regular;
