import React from 'react';

export const CoreVoicemailRegularDuo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 240a80 80 0 1 0 160 0 80 80 0 1 0-160 0m352 0a80 80 0 1 0 160 0 80 80 0 1 0-160 0","opacity":".4"}), React.createElement("path", {"fill":"currentColor","d":"M144 160a80 80 0 1 1 0 160 80 80 0 1 1 0-160m119.8 160c15.3-22.9 24.2-50.4 24.2-80 0-79.5-64.5-144-144-144S0 160.5 0 240s64.5 144 144 144h352c79.5 0 144-64.5 144-144S575.5 96 496 96s-144 64.5-144 144c0 29.6 8.9 57.1 24.2 80H263.7zM496 160a80 80 0 1 1 0 160 80 80 0 1 1 0-160"})
);

export default CoreVoicemailRegularDuo;
