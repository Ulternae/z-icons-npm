import React from 'react';

export function LanDropletDegreeRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -16 576 528',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 464c-79.5 0-144-64.5-144-144 0-13.2 5.2-34.6 17.2-63.7 11.6-28 27.9-58.9 45.8-89.5 28.7-48.9 60.3-94.8 80.9-123.6 20.6 28.8 52.3 74.7 80.9 123.6 18 30.6 34.2 61.5 45.8 89.5 12.1 29.1 17.2 50.5 17.2 63.7 0 79.5-64.5 144-144 144zM64 320c0 106 86 192 192 192s192-86 192-192c0-91.2-130.2-274.1-166.6-323.5-5.9-8-15.2-12.5-25.2-12.5h-.4c-10 0-19.3 4.5-25.2 12.5C194.2 45.9 64 228.8 64 320M464 80a32 32 0 1 1 64 0 32 32 0 1 1-64 0m112 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0"})
  );
}

export default LanDropletDegreeRegular;
