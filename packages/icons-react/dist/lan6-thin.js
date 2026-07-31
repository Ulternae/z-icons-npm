import React from 'react';

export const Lan6Thin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M280 32c4.4 0 8 3.6 8 8s-3.6 8-8 8H144C82.1 48 32 98.1 32 160v125c22.4-41.1 65.9-69 116-69h72c72.9 0 132 59.1 132 132s-59.1 132-132 132h-72c-71.1 0-129.1-56.3-131.9-126.7-.1-.4-.1-.9-.1-1.3V160C16 89.3 73.3 32 144 32zM32 348c0 64.1 51.9 116 116 116h72c64.1 0 116-51.9 116-116s-51.9-116-116-116h-72c-64.1 0-116 51.9-116 116"})
);

export default Lan6Thin;
