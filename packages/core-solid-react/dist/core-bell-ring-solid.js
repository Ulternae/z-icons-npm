import React from 'react';

export function CoreBellRingSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -30.6 576 542.6',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M352 512H224v-64h128zM288 0c88.4 0 160 71.6 160 160v88.4L531.8 416H44.2L128 248.4V160C128 71.6 199.6 0 288 0M120 11.8C85.1 51.3 64 103.2 64 160v32H0v-32C0 87 27.2 20.2 72-30.5l48 42.4zm384-42.3C548.8 20.2 576 87 576 160v32h-64v-32c0-56.8-21.1-108.7-56-148.2l48-42.4z"})
  );
}

export default CoreBellRingSolid;
