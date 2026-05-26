import React from 'react';

export const LanVoicemailRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M144 144a96 96 0 1 1 0 192 96 96 0 1 1 0-192m107.3 192c22.8-25.5 36.7-59.1 36.7-96 0-79.5-64.5-144-144-144S0 160.5 0 240s64.5 144 144 144h352c79.5 0 144-64.5 144-144S575.5 96 496 96s-144 64.5-144 144c0 36.9 13.9 70.5 36.7 96H251.4zM496 144a96 96 0 1 1 0 192 96 96 0 1 1 0-192"})
);

export default LanVoicemailRegular;
