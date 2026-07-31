import React from 'react';

export function CoreBellSlashSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -45.2 640 602.5',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m621.5 512-45.2 45.3L19 0l45.3-45.2zm-237.2-56.2V512h-128v-64h120.2zM344.5 416h-268l83.8-167.6v-16.7l184.2 184.2zM320.3 0c88.4 0 160 71.6 160 160v120.2L228.8 28.7C254.7 10.6 286.2 0 320.3 0"})
  );
}

export default CoreBellSlashSolid;
