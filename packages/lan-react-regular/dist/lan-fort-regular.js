import React from 'react';

export function LanFortRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M24 32c13.3 0 24 10.7 24 24v40h56V56c0-13.3 10.7-24 24-24s24 10.7 24 24v40h56V56c0-13.3 10.7-24 24-24s24 10.7 24 24v104h64V56c0-13.3 10.7-24 24-24s24 10.7 24 24v40h56V56c0-13.3 10.7-24 24-24s24 10.7 24 24v40h56V56c0-13.3 10.7-24 24-24s24 10.7 24 24v152c0 20.9-13.4 38.7-32 45.3V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V253.3C13.4 246.7 0 228.9 0 208V56c0-13.3 10.7-24 24-24m184 224H80v192c0 8.8 7.2 16 16 16h128v-80c0-35.3 28.7-64 64-64s64 28.7 64 64v80h128c8.8 0 16-7.2 16-16V256H368c-26.5 0-48-21.5-48-48h-64c0 26.5-21.5 48-48 48m0-112H48v64h160zm160 64h160v-64H368z"})
  );
}

export default LanFortRegular;
