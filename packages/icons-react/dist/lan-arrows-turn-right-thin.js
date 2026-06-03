import React from 'react';

export const LanArrowsTurnRightThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -8.025 448 520.025',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M338.3-5.7c3.1-3.1 8.2-3.1 11.3 0l96 96c3.1 3.1 3.1 8.2 0 11.3l-96 96c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l82.4-82.3H128c-61.9 0-112 50.1-112 112v32c0 4.4-3.6 8-8 8s-8-3.6-8-8v-32C0 145.3 57.3 88 128 88h292.7L338.4 5.7c-3.1-3.1-3.1-8.2 0-11.3zm-88 264c3.1-3.1 8.2-3.1 11.3 0l88 88c3.1 3.1 3.1 8.2 0 11.3l-88 88c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l74.4-74.3H96c-44.2 0-80 35.8-80 80v32c0 4.4-3.6 8-8 8s-8-3.6-8-8v-32c0-53 43-96 96-96h228.7l-74.3-74.3c-3.1-3.1-3.1-8.2 0-11.3z"})
);

export default LanArrowsTurnRightThin;
