import React from 'react';

export function LanComputerMouseButtonRightThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M368 192H240c-22.1 0-40-17.9-40-40V16h24c79.5 0 144 64.5 144 144zM200 0h-40C71.6 0 0 71.6 0 160v192c0 88.4 71.6 160 160 160h64c88.4 0 160-71.6 160-160V160C384 71.6 312.4 0 224 0zm168 208v144c0 79.5-64.5 144-144 144h-64c-79.5 0-144-64.5-144-144V160C16 80.5 80.5 16 160 16h24v136c0 30.9 25.1 56 56 56z"})
  );
}

export default LanComputerMouseButtonRightThin;
