import React from 'react';

export const LanH6Thin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M8 64c4.4 0 8 3.6 8 8v176h192V72c0-4.4 3.6-8 8-8s8 3.6 8 8v368c0 4.4-3.6 8-8 8s-8-3.6-8-8V264H16v176c0 4.4-3.6 8-8 8s-8-3.6-8-8V72c0-4.4 3.6-8 8-8m376 16c-44.2 0-80 35.8-80 80v90.9c17.2-25.9 46.6-42.9 80-42.9h32c53 0 96 43 96 96v48c0 53-43 96-96 96h-32c-53 0-96-43-96-96V160c0-53 43-96 96-96h88c4.4 0 8 3.6 8 8s-3.6 8-8 8zm-80 224v48c0 44.2 35.8 80 80 80h32c44.2 0 80-35.8 80-80v-48c0-44.2-35.8-80-80-80h-32c-44.2 0-80 35.8-80 80"})
);

export default LanH6Thin;
