import React from 'react';

export const LanAccentGraveRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 192 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M80.2 65.3C80.2 55.7 88 48 97.5 48c8.4 0 15.6 6 17 14.3l18.2 102.1L83 80c-1.9-3.3-2.9-7-2.9-10.7v-3.9zm-48 0v3.9c0 12.3 3.3 24.4 9.5 35.1L99 201.7c8.1 13.8 23 22.3 39 22.3 28.2 0 49.5-25.5 44.6-53.3L161.8 53.8C156.3 22.7 129.2 0 97.5 0 61.4 0 32.2 29.2 32.2 65.3"})
);

export default LanAccentGraveRegular;
